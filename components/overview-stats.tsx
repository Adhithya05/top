"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Truck, Trash, ArrowUpRight, MapPin } from "lucide-react"

export function OverviewStats() {
  // Mock data - replace with actual API calls later
  const stats = [
    {
      title: "Total Waste Collected",
      value: "1,245 tons",
      change: "+12.5%",
      icon: Trash,
    },
    {
      title: "Recycling Rate",
      value: "42.3%",
      change: "+2.1%",
      icon: Recycle,
    },
    {
      title: "Collection Centers",
      value: "32",
      change: "+3",
      icon: MapPin,
    },
    {
      title: "Active Collectors",
      value: "18",
      change: "+5",
      icon: Truck,
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {stat.change} from last month
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

