// lib/firebase.ts

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import type { Analytics } from "firebase/analytics" // ✅ Import the correct type

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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
