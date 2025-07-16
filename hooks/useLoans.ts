//hooks/useLoans.ts
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

type Loan = {
    id: string;
    type: string;
    status: "Active" | "Closed" | "Overdue";
    amount: string;
    monthlyEMI: string;
    interestRate: string;
    remainingAmount: string;
    paidInstallments: number;
    totalInstallments: number;
    disbursedDate: string;
    tenure: string;
    nextDueDate: string;
}

export function useLoans() {
    const [loans, setLoans] = useState<Loan[]>([]);

    useEffect(() => {
        const q = query(collection(db, "loans"), orderBy("disbursedDate", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const loanData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            })) as Loan[];
            setLoans(loanData);
        });

        return () => unsubscribe();
    }, [])
    
    return loans;
}

