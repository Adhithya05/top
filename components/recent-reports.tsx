"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentReports() {
  // Mock data - replace with actual API calls later
  const reports = [
    {
      id: 1,
      user: "Alex Johnson",
      userInitials: "AJ",
      location: "Koramangala",
      type: "Illegal Dumping",
      status: "Pending",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Priya Sharma",
      userInitials: "PS",
      location: "Indiranagar",
      type: "Collection Issue",
      status: "In Progress",
      time: "5 hours ago",
    },
    {
      id: 3,
      user: "Rahul Patel",
      userInitials: "RP",
      location: "Whitefield",
      type: "Recycling Query",
      status: "Resolved",
      time: "1 day ago",
    },
    {
      id: 4,
      user: "Meera Reddy",
      userInitials: "MR",
      location: "Jayanagar",
      type: "Illegal Dumping",
      status: "Pending",
      time: "1 day ago",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500"
      case "In Progress":
        return "bg-blue-500"
      case "Resolved":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>{report.userInitials}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{report.user}</p>
                  <span className="text-xs text-muted-foreground">{report.time}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {report.type} in {report.location}
                </p>
              </div>
              <Badge variant="outline" className={`${getStatusColor(report.status)} text-white`}>
                {report.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

