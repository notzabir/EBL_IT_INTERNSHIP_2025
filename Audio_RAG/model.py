# backend.py

import os
import json
import pickle
import faiss
import numpy as np
from pydub import AudioSegment

AudioSegment.converter = r"C:/Users/ahnaf/Downloads/ffmpeg-7.0.2-essentials_build/ffmpeg-7.0.2-essentials_build/bin/ffmpeg.exe"  # 👈 Replace with your path!
from sentence_transformers import SentenceTransformer
import nemo.collections.asr as nemo_asr

# ==== 1. Transcribe audio ====
def transcribe_audio(file_path):
    asr_model = nemo_asr.models.ASRModel.from_pretrained(model_name="nvidia/parakeet-tdt-0.6b-v2")
    output = asr_model.transcribe([file_path], timestamps=True)
    return output

# ==== 2. Save transcript ====
def save_transcripts(output, output_name="input"):
    os.makedirs("transcripts", exist_ok=True)
    with open(f"transcripts/{output_name}.txt", "w", encoding="utf-8") as f:
        f.write(output[0].text)

    segments = output[0].timestamp["segment"]
    with open(f"transcripts/{output_name}.json", "w", encoding="utf-8") as f:
        json.dump({
            "transcript": output[0].text,
            "segments": segments
        }, f, ensure_ascii=False, indent=4)
    return segments

# ==== 3. Prepare chunks ====
def prepare_chunks(segments, file_name):
    return [{
        "text": seg["segment"],
        "start_time": seg["start"],
        "end_time": seg["end"],
        "file_name": file_name
    } for seg in segments]

# ==== 4. Build FAISS index ====
def build_faiss_index(chunks):
    model = SentenceTransformer("sentence-transformers/multi-qa-MiniLM-L6-cos-v1")
    texts = [c["text"] for c in chunks]
    embeddings = model.encode(texts)

    index = faiss.IndexFlatL2(embeddings.shape[1])
    index.add(np.array(embeddings))

    os.makedirs("faiss_index", exist_ok=True)
    faiss.write_index(index, "faiss_index/index.idx")
    with open("faiss_index/chunk_metadata.pkl", "wb") as f:
        pickle.dump(chunks, f)

# ==== 5. Load index ====
def load_index():
    model = SentenceTransformer("sentence-transformers/multi-qa-MiniLM-L6-cos-v1")
    index = faiss.read_index("faiss_index/index.idx")
    with open("faiss_index/chunk_metadata.pkl", "rb") as f:
        chunks = pickle.load(f)
    return model, index, chunks

# ==== 6. Retrieve relevant answers ====
def retrieve_answers(query, model, index, chunks, top_k=3):
    q_emb = model.encode([query])
    D, I = index.search(np.array(q_emb), top_k)
    return [chunks[i] for i in I[0]]

# ==== 7. Extract audio snippet ====
def extract_audio_snippet(file_path, start, end, output_path):
    os.makedirs("snippets", exist_ok=True)
    audio = AudioSegment.from_file(file_path)
    snippet = audio[start * 1000:end * 1000]
    snippet.export(output_path, format="mp3")
