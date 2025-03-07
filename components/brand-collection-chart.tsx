"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart,
  ChartContainer,
  ChartGrid,
  ChartLine,
  ChartBar,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function BrandCollectionChart() {
  // Mock data - replace with actual API calls later
  const data = [
    { month: "Jan", collected: 18, target: 20 },
    { month: "Feb", collected: 19, target: 20 },
    { month: "Mar", collected: 21, target: 22 },
    { month: "Apr", collected: 20, target: 22 },
    { month: "May", collected: 22, target: 24 },
    { month: "Jun", collected: 25, target: 24 },
    { month: "Jul", collected: 24, target: 26 },
    { month: "Aug", collected: 26, target: 26 },
    { month: "Sep", collected: 27, target: 28 },
    { month: "Oct", collected: 28, target: 28 },
    { month: "Nov", collected: 30, target: 30 },
    { month: "Dec", collected: 32, target: 30 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collection vs Target (tons)</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart className="h-80">
          <ChartContainer data={data}>
            <ChartGrid horizontal vertical />
            <ChartXAxis dataKey="month" />
            <ChartYAxis />
            <ChartBar dataKey="collected" name="Collected" fill="#0ea5e9" radius={4} />
            <ChartLine dataKey="target" name="Target" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444" }} />
            <ChartTooltip />
          </ChartContainer>
        </Chart>
      </CardContent>
    </Card>
  )
}

