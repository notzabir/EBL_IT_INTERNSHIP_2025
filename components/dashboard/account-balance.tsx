"use client" // Required for useRouter in client components

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AccountBalance() {
  const router = useRouter()

  const handleViewDetails = () => {
    router.push("/dashboard/statements")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Total Account Balance</CardTitle>
        <p className="text-sm text-gray-600">January 19, 2024</p>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-gray-900 mb-2">৳76,000.00</div>
        <p className="text-sm text-gray-600 mb-4">Active Balance</p>
        <Button onClick={handleViewDetails} className="bg-blue-600 hover:bg-blue-700">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
