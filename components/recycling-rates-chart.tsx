"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart,
  ChartContainer,
  ChartGrid,
  ChartLine,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
} from "@/components/ui/chart"

export function RecyclingRatesChart() {
  // Mock data - replace with actual API calls later
  const data = [
    { month: "Jan", rate: 32 },
    { month: "Feb", rate: 34 },
    { month: "Mar", rate: 36 },
    { month: "Apr", rate: 35 },
    { month: "May", rate: 38 },
    { month: "Jun", rate: 40 },
    { month: "Jul", rate: 42 },
    { month: "Aug", rate: 41 },
    { month: "Sep", rate: 43 },
    { month: "Oct", rate: 42 },
    { month: "Nov", rate: 44 },
    { month: "Dec", rate: 45 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recycling Rates (%)</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart className="h-80">
          <ChartContainer data={data}>
            <ChartGrid horizontal vertical />
            <ChartXAxis dataKey="month" />
            <ChartYAxis />
            <ChartLine dataKey="rate" stroke="#0ea5e9" strokeWidth={2} dot={{ fill: "#0ea5e9" }} />
            <ChartTooltip />
          </ChartContainer>
        </Chart>
      </CardContent>
    </Card>
  )
}

