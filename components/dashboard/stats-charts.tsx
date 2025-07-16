"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const data = [
  { name: "Savings", value: 45, color: "#3B82F6" },
  { name: "Loans", value: 30, color: "#EF4444" },
  { name: "Investments", value: 25, color: "#10B981" },
]

export function StatsCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            savings: { label: "Savings", color: "#3B82F6" },
            loans: { label: "Loans", color: "#EF4444" },
            investments: { label: "Investments", color: "#10B981" },
          }}
          className="h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={80} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
