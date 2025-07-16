import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CardsAvailable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cards Available</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="credit" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="credit">Credit Card</TabsTrigger>
            <TabsTrigger value="lounge">Lounge Card</TabsTrigger>
          </TabsList>

          <TabsContent value="credit" className="mt-4">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white shadow-lg">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-sm opacity-80">VISA</p>
                    <p className="text-xs opacity-60">CREDIT CARD</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-60">EBL BANK</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-mono tracking-wider">4532 **** **** 7891</p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-60">CARD HOLDER</p>
                    <p className="text-sm font-semibold">JYOTI PANDEY</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-60">EXPIRES</p>
                    <p className="text-sm">12/28</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lounge" className="mt-4">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-sm opacity-80">PREMIUM</p>
                    <p className="text-xs opacity-60">AIRPORT LOUNGE</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-60">EBL EXCLUSIVE</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-mono tracking-wider">AL-9876 5432 1098</p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-60">MEMBER</p>
                    <p className="text-sm font-semibold">JYOTI PANDEY</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-60">VALID UNTIL</p>
                    <p className="text-sm">DEC 2025</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
                    <span className="text-xs">✈</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
