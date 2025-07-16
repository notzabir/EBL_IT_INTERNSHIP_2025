import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Loan Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
            <Calculator className="w-4 h-4 mr-2" />
            Use Now
          </Button>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
            </div>
            <div className="text-center text-sm text-gray-600">Calculate your loan EMI</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
