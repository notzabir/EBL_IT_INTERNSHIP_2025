"use client"

import { useTransactions } from "@/hooks/useTransactions"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Filter } from "lucide-react"

export default function StatementsPage() {
  const statements = useTransactions()

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-gray-50">
        <DashboardSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex justify-between items-center flex-1">
              <h1 className="text-xl font-semibold">Transaction Statements</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                {statements.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Loading transactions or none found.</p>
                ) : (
                  <div className="space-y-4">
                    {statements.map((tx) => (
                      <div key={tx.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{tx.description}</h3>
                            <p className="text-sm text-gray-600 mt-1">{tx.date}</p>
                          </div>
                          <div className="text-right">
                            <p
                              className={`text-lg font-semibold ${
                                tx.amount.startsWith("-") ? "text-red-600" : "text-green-600"
                              }`}
                            >
                              {tx.amount}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Badge
                            variant={tx.status === "successful" ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {tx.status}
                          </Badge>
                          <span className="text-xs text-gray-500">ID: {tx.id}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
