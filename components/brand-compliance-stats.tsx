"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, CheckCircle, AlertTriangle } from "lucide-react"

export function BrandComplianceStats() {
  // Mock data - replace with actual API calls later
  const stats = [
    {
      title: "Total Collected",
      value: "245 tons",
      target: "300 tons",
      progress: 82,
      change: "+12.5%",
      icon: ArrowUpRight,
      status: "positive",
    },
    {
      title: "Recycling Rate",
      value: "78.3%",
      target: "75%",
      progress: 104,
      change: "+3.1%",
      icon: ArrowUpRight,
      status: "positive",
    },
    {
      title: "EPR Compliance",
      value: "92%",
      target: "100%",
      progress: 92,
      change: "+5%",
      icon: ArrowUpRight,
      status: "positive",
    },
    {
      title: "Carbon Offset",
      value: "42 tons",
      target: "50 tons",
      progress: 84,
      change: "-2.3%",
      icon: ArrowDownRight,
      status: "negative",
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.progress >= 100 ? (
              <CheckCircle className="h-4 w-4 text-green-500" />
            ) : (
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="mt-1 flex items-center text-xs">
              <div className="text-muted-foreground">Target: {stat.target}</div>
              <div
                className={`ml-auto flex items-center ${
                  stat.status === "positive" ? "text-green-500" : "text-red-500"
                }`}
              >
                <stat.icon className="mr-1 h-3 w-3" />
                {stat.change}
              </div>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-muted">
              <div
                className={`h-full rounded-full ${stat.progress >= 100 ? "bg-green-500" : "bg-yellow-500"}`}
                style={{ width: `${Math.min(stat.progress, 100)}%` }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

