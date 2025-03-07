"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartLegend, ChartLegendItem, ChartPie, ChartTooltip } from "@/components/ui/chart"

export function WasteByMaterialChart() {
  // Mock data - replace with actual API calls later
  const data = [
    { name: "Plastic", value: 35, color: "#0ea5e9" },
    { name: "Paper", value: 25, color: "#22c55e" },
    { name: "Glass", value: 15, color: "#f59e0b" },
    { name: "Metal", value: 10, color: "#ef4444" },
    { name: "Organic", value: 10, color: "#8b5cf6" },
    { name: "Other", value: 5, color: "#64748b" },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Waste by Material</CardTitle>
      </CardHeader>
      <CardContent>
        <Chart className="h-80">
          <ChartContainer>
            <ChartPie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2} />
            <ChartTooltip />
          </ChartContainer>
          <ChartLegend className="mt-4">
            {data.map((entry, index) => (
              <ChartLegendItem key={`item-${index}`} color={entry.color}>
                {entry.name}: {entry.value}%
              </ChartLegendItem>
            ))}
          </ChartLegend>
        </Chart>
      </CardContent>
    </Card>
  )
}

