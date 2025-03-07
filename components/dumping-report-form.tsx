"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DumpingReportForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Report Illegal Dumping</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="Enter address or coordinates" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="waste-type">Waste Type</Label>
              <Select>
                <SelectTrigger id="waste-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="household">Household Waste</SelectItem>
                  <SelectItem value="construction">Construction Debris</SelectItem>
                  <SelectItem value="industrial">Industrial Waste</SelectItem>
                  <SelectItem value="hazardous">Hazardous Materials</SelectItem>
                  <SelectItem value="ewaste">E-Waste</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="severity">Severity</Label>
              <Select>
                <SelectTrigger id="severity">
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low - Small amount</SelectItem>
                  <SelectItem value="medium">Medium - Moderate pile</SelectItem>
                  <SelectItem value="high">High - Large dump</SelectItem>
                  <SelectItem value="critical">Critical - Hazardous/Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Describe the dumping site and waste materials" rows={4} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photos">Upload Photos</Label>
            <Input id="photos" type="file" multiple accept="image/*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Information (optional)</Label>
            <Input id="contact" placeholder="Email or phone number" />
          </div>

          <Button type="submit" className="w-full">
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

