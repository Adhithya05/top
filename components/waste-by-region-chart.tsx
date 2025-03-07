"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartBar, ChartGrid, ChartTooltip, ChartXAxis, ChartYAxis } from "@/components/ui/chart"

export function WasteByRegionChart() {
  // Mock data - replace with actual API calls later
  const data = [
    { region: "North Bangalore", plastic: 120, paper: 80, glass: 40, metal: 30, organic: 90 },
    { region: "South Bangalore", plastic: 100, paper: 70, glass: 35, metal: 25, organic: 110 },
    { region: "East Bangalore", plastic: 80, paper: 60, glass: 30, metal: 20, organic: 70 },
    { region: "West Bangalore", plastic: 90, paper: 65, glass: 25, metal: 15, organic: 80 },
    { region: "Central", plastic: 110, paper: 75, glass: 45, metal: 35, organic: 60 },
  ]

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Waste by Region (tons)</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart className="h-80">
          <ChartContainer data={data}>
            <ChartGrid horizontal vertical />
            <ChartXAxis dataKey="region" />
            <ChartYAxis />
            <ChartBar dataKey="plastic" name="Plastic" fill="#0ea5e9" radius={4} />
            <ChartBar dataKey="paper" name="Paper" fill="#22c55e" radius={4} />
            <ChartBar dataKey="glass" name="Glass" fill="#f59e0b" radius={4} />
            <ChartBar dataKey="metal" name="Metal" fill="#ef4444" radius={4} />
            <ChartBar dataKey="organic" name="Organic" fill="#8b5cf6" radius={4} />
            <ChartTooltip />
          </ChartContainer>
        </Chart>
      </CardContent>
    </Card>
  )
}

