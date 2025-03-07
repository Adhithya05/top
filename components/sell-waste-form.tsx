"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SellWasteForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>List Your Waste</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="material-type">Material Type</Label>
              <Select>
                <SelectTrigger id="material-type">
                  <SelectValue placeholder="Select material" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plastic">Plastic</SelectItem>
                  <SelectItem value="paper">Paper</SelectItem>
                  <SelectItem value="glass">Glass</SelectItem>
                  <SelectItem value="metal">Metal</SelectItem>
                  <SelectItem value="e-waste">E-Waste</SelectItem>
                  <SelectItem value="organic">Organic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity (kg)</Label>
              <Input id="quantity" type="number" min={1} placeholder="Enter quantity" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Pickup Location</Label>
            <Input id="location" placeholder="Enter your address" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the waste materials (condition, packaging, etc.)"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photos">Upload Photos</Label>
            <Input id="photos" type="file" multiple accept="image/*" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Expected Price (₹/kg)</Label>
            <Input id="price" type="number" min={0} placeholder="Enter expected price" />
          </div>

          <Button type="submit" className="w-full">
            List for Sale
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

