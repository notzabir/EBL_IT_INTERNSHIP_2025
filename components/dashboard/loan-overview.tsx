import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LoanOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>My Loans</CardTitle>
        <div className="text-sm text-blue-600">View all</div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex space-x-4 flex-1">
            <div className="bg-yellow-400 p-4 rounded-lg flex-1">
              <h3 className="font-semibold text-black">Personal Loan</h3>
              <p className="text-sm text-black/70">XXXXXXXXXX4519</p>
              <p className="text-sm text-black/70 mt-2">Outstanding amount</p>
              <p className="text-lg font-bold text-black">৳10,000.00</p>
            </div>

            <div className="bg-red-400 p-4 rounded-lg flex-1">
              <h3 className="font-semibold text-white">Vehicle Loan</h3>
              <p className="text-sm text-white/70">XXXXXXXXXX4519</p>
              <p className="text-sm text-white/70 mt-2">Outstanding amount</p>
              <p className="text-lg font-bold text-white">৳10,000.00</p>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
