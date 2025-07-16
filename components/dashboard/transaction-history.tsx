"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTransactions } from "@/hooks/useTransactions"

export function TransactionHistory() {
  const transactions = useTransactions()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions found.</p>
        ) : (
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{transaction.description}</h3>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      transaction.amount.startsWith("-") ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                  <Badge variant={transaction.status === "successful" ? "default" : "destructive"}>
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
