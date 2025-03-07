"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function MarketRates() {
  // Mock data - replace with actual API calls later
  const rates = [
    {
      material: "PET Plastic",
      rate: "₹15-20/kg",
      trend: "up",
      demand: "High",
    },
    {
      material: "HDPE Plastic",
      rate: "₹25-30/kg",
      trend: "up",
      demand: "High",
    },
    {
      material: "Newspaper",
      rate: "₹12-15/kg",
      trend: "stable",
      demand: "Medium",
    },
    {
      material: "Cardboard",
      rate: "₹8-10/kg",
      trend: "down",
      demand: "Medium",
    },
    {
      material: "Glass Bottles",
      rate: "₹2-3/kg",
      trend: "stable",
      demand: "Low",
    },
    {
      material: "Aluminum Cans",
      rate: "₹100-120/kg",
      trend: "up",
      demand: "High",
    },
    {
      material: "Copper",
      rate: "₹400-450/kg",
      trend: "up",
      demand: "High",
    },
    {
      material: "E-Waste",
      rate: "₹15-200/kg",
      trend: "up",
      demand: "High",
    },
  ]

  const getTrendBadge = (trend: string) => {
    switch (trend) {
      case "up":
        return <Badge className="bg-green-500">↑</Badge>
      case "down":
        return <Badge className="bg-red-500">↓</Badge>
      case "stable":
        return <Badge variant="outline">→</Badge>
      default:
        return null
    }
  }

  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case "High":
        return <Badge className="bg-green-500">{demand}</Badge>
      case "Medium":
        return <Badge className="bg-yellow-500">{demand}</Badge>
      case "Low":
        return <Badge className="bg-red-500">{demand}</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Market Rates</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Material</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Trend</TableHead>
              <TableHead>Demand</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell>{rate.material}</TableCell>
                <TableCell>{rate.rate}</TableCell>
                <TableCell>{getTrendBadge(rate.trend)}</TableCell>
                <TableCell>{getDemandBadge(rate.demand)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

