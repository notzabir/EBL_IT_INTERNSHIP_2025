// lib/firebase.ts

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import type { Analytics } from "firebase/analytics" // ✅ Import the correct type

const firebaseConfig = {
  apiKey: "AIzaSyDTFcaZ-h8xintKJiPJov9fSf76t1_nqmM",
  authDomain: "my-project-12bf7.firebaseapp.com",
  projectId: "my-project-12bf7",
  storageBucket: "my-project-12bf7.firebasestorage.app",
  messagingSenderId: "880301227336",
  appId: "1:880301227336:web:6e80deed90380c5d1f477d",
  measurementId: "G-TS1FL43L2Z"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

let analytics: Analytics | null = null // ✅ Properly typed

if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics, logEvent }) => {
    analytics = getAnalytics(app)
    logEvent(analytics, "notification_received")
  })
}
