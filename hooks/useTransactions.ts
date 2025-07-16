// hooks/useTransactions.ts
import { useEffect, useState } from "react"
import { db } from "@/lib/firebase"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"

type Transaction = {
  id: string
  description: string
  amount: string
  status: "successful" | "failed"
  date: string
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    const q = query(collection(db, "transactions"), orderBy("date", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const txs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[]
      setTransactions(txs)
    })

    return () => unsubscribe()
  }, [])

  return transactions
}
