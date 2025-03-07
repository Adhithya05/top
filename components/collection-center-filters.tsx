"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export function CollectionCenterFilters() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <Label htmlFor="search">Search Location</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="search" placeholder="Enter location..." className="pl-8" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Center Type</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="municipal" defaultChecked />
                <label htmlFor="municipal" className="text-sm">
                  Municipal (5)
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="private" defaultChecked />
                <label htmlFor="private" className="text-sm">
                  Private (10)
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="scrap" defaultChecked />
                <label htmlFor="scrap" className="text-sm">
                  Scrap Dealers (10)
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="ewaste" defaultChecked />
                <label htmlFor="ewaste" className="text-sm">
                  E-Waste (5)
                </label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="distance">Distance (km)</Label>
            <Input id="distance" type="number" defaultValue={10} min={1} max={50} />
          </div>

          <div className="flex items-end">
            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

