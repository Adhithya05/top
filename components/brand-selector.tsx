"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export function BrandSelector() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="brand">Select Brand</Label>
            <Select defaultValue="bisleri">
              <SelectTrigger id="brand">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bisleri">Bisleri</SelectItem>
                <SelectItem value="coca-cola">Coca-Cola</SelectItem>
                <SelectItem value="pepsi">Pepsi</SelectItem>
                <SelectItem value="amul">Amul</SelectItem>
                <SelectItem value="parle">Parle</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full max-w-xs space-y-2">
            <Label htmlFor="time-period">Time Period</Label>
            <Select defaultValue="quarter">
              <SelectTrigger id="time-period">
                <SelectValue placeholder="Select time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

