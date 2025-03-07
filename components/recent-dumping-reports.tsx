"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentDumpingReports() {
  // Mock data - replace with actual API calls later
  const reports = [
    {
      id: 1,
      location: "Koramangala 4th Block",
      type: "Household Waste",
      severity: "Medium",
      status: "Under Review",
      time: "2 hours ago",
      votes: 5,
    },
    {
      id: 2,
      location: "Indiranagar 12th Main",
      type: "Construction Debris",
      severity: "High",
      status: "Assigned",
      time: "5 hours ago",
      votes: 12,
    },
    {
      id: 3,
      location: "Whitefield Main Road",
      type: "Industrial Waste",
      severity: "Critical",
      status: "In Progress",
      time: "1 day ago",
      votes: 24,
    },
    {
      id: 4,
      location: "Jayanagar 4th Block",
      type: "E-Waste",
      severity: "Low",
      status: "Resolved",
      time: "2 days ago",
      votes: 3,
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low":
        return "bg-yellow-500"
      case "Medium":
        return "bg-orange-500"
      case "High":
        return "bg-red-500"
      case "Critical":
        return "bg-purple-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review":
        return "bg-yellow-500"
      case "Assigned":
        return "bg-blue-500"
      case "In Progress":
        return "bg-orange-500"
      case "Resolved":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="flex items-start space-x-4 border-b pb-4 last:border-0 last:pb-0">
              <Avatar>
                <AvatarFallback>{report.votes}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{report.location}</p>
                  <span className="text-xs text-muted-foreground">{report.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">{report.type}</p>
                <div className="flex space-x-2 pt-1">
                  <Badge variant="outline" className={`${getSeverityColor(report.severity)} text-white`}>
                    {report.severity}
                  </Badge>
                  <Badge variant="outline" className={`${getStatusColor(report.status)} text-white`}>
                    {report.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

