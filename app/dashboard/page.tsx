import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen bg-gray-50">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </SidebarProvider>
  )
}
