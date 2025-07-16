import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { AccountBalance } from "@/components/dashboard/account-balance"
import { CardsAvailable } from "@/components/dashboard/cards-available"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { TransactionHistory } from "@/components/dashboard/transaction-history"
import { LoanOverview } from "@/components/dashboard/loan-overview"
import { StatsCharts } from "@/components/dashboard/stats-charts"
import { Separator } from "@/components/ui/separator"

export function DashboardContent() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <DashboardHeader />
      </header>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 space-y-6">
            <AccountBalance />
            <CardsAvailable />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <LoanOverview />
          <StatsCharts />
        </div>
        <TransactionHistory />
      </main>
    </SidebarInset>
  )
}
