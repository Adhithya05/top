"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartPie, ChartLegend, ChartLegendItem } from "@/components/ui/chart"

export function BrandGeographicDistribution() {
  // Mock data - replace with actual API calls later
  const data = [
    { region: "North Bangalore", value: 35, color: "#0ea5e9" },
    { region: "South Bangalore", value: 25, color: "#22c55e" },
    { region: "East Bangalore", value: 15, color: "#f59e0b" },
    { region: "West Bangalore", value: 15, color: "#ef4444" },
    { region: "Central Bangalore", value: 10, color: "#8b5cf6" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Geographic Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart className="h-80">
          <ChartContainer>
            <ChartPie data={data} dataKey="value" nameKey="region" innerRadius={50} outerRadius={80} paddingAngle={2} />
            <ChartTooltip />
          </ChartContainer>
          <ChartLegend className="mt-4">
            {data.map((entry, index) => (
              <ChartLegendItem key={`item-${index}`} color={entry.color}>
                {entry.region}: {entry.value}%
              </ChartLegendItem>
            ))}
          </ChartLegend>
        </Chart>
      </CardContent>
    </Card>
  )
}

