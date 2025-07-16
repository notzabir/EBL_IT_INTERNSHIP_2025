"use client"

import { useLoans } from "@/hooks/useLoans"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function LoansPage() {
  const loans = useLoans()

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-gray-50">
        <DashboardSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <h1 className="text-xl font-semibold">My Loans</h1>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <div className="space-y-6">
              {loans.length === 0 ? (
                <p className="text-muted-foreground text-sm">Loading loans or no loan data found.</p>
              ) : (
                loans.map((loan) => (
                  <Card key={loan.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{loan.type}</CardTitle>
                          <p className="text-sm text-gray-600 mt-1">Loan ID: {loan.id}</p>
                        </div>
                        <Badge
                          variant={
                            loan.status === "Active"
                              ? "default"
                              : loan.status === "Closed"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {loan.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div>
                          <p className="text-sm text-gray-600">Loan Amount</p>
                          <p className="text-lg font-semibold">{loan.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Monthly EMI</p>
                          <p className="text-lg font-semibold">{loan.monthlyEMI}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Interest Rate</p>
                          <p className="text-lg font-semibold">{loan.interestRate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Remaining Amount</p>
                          <p className="text-lg font-semibold text-red-600">{loan.remainingAmount}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Payment Progress</span>
                          <span>
                            {loan.paidInstallments}/{loan.totalInstallments} installments
                          </span>
                        </div>
                        <Progress
                          value={(loan.paidInstallments / loan.totalInstallments) * 100}
                          className="h-2"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Disbursed Date</p>
                          <p className="font-medium">{loan.disbursedDate}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Tenure</p>
                          <p className="font-medium">{loan.tenure}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Next Due Date</p>
                          <p className="font-medium text-orange-600">{loan.nextDueDate}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
