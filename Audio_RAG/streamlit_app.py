# streamlit_app.py

import streamlit as st
import os
from model import transcribe_audio, save_transcripts, prepare_chunks, build_faiss_index
from model import load_index, retrieve_answers, extract_audio_snippet

st.set_page_config(page_title="Audio RAG", layout="wide")
st.title("🎙️ Audio Q&A with Audio Snippet")

# Upload audio file
uploaded = st.sidebar.file_uploader("Upload a .wav or .mp3 file", type=["wav", "mp3"])
if uploaded:
    os.makedirs("recordings", exist_ok=True)
    file_path = f"recordings/{uploaded.name}"
    with open(file_path, "wb") as f:
        f.write(uploaded.read())
    st.sidebar.success("Uploaded successfully!")

    # Transcribe & index
    st.info("🔁 Transcribing audio...")
    output = transcribe_audio(file_path)

    st.success("✅ Transcription done!")
    segments = save_transcripts(output, uploaded.name)
    chunks = prepare_chunks(segments, uploaded.name)
    build_faiss_index(chunks)
    st.success("✅ Index built successfully!")

# Ask question
query = st.text_input("Ask a question (from transcript):")
if st.button("🔍 Get Answer"):
    model, index, chunks = load_index()
    results = retrieve_answers(query, model, index, chunks)

    st.subheader("🧠 Answer from Transcript")
    for r in results:
        st.markdown(f"**{r['start_time']}s – {r['end_time']}s:** {r['text']}")

    snippet_path = f"snippets/{results[0]['file_name']}_snippet.mp3"
    extract_audio_snippet(f"recordings/{results[0]['file_name']}", results[0]["start_time"], results[0]["end_time"], snippet_path)

    st.subheader("🔊 Relevant Audio Snippet")
    st.audio(snippet_path)
