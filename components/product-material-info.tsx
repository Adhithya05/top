"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Recycle, Trash, AlertTriangle } from "lucide-react"

export function ProductMaterialInfo() {
  // Mock data - replace with actual API calls later
  const productInfo = {
    name: "Bisleri 1L Water Bottle",
    brand: "Bisleri",
    materials: [
      { name: "PET Plastic", percentage: 98, recyclable: true },
      { name: "Label (Paper/Plastic)", percentage: 1.5, recyclable: true },
      { name: "Adhesive", percentage: 0.5, recyclable: false },
    ],
    disposal: "Recyclable - Plastic Bin",
    recyclingInstructions: ["Remove cap and label if possible", "Rinse before recycling", "Crush to save space"],
    environmentalImpact: "Medium",
    alternatives: ["Reusable water bottle", "Water filter at home"],
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{productInfo.name}</CardTitle>
        <p className="text-sm text-muted-foreground">Brand: {productInfo.brand}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Material Composition</h3>
          <div className="space-y-3">
            {productInfo.materials.map((material, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{material.name}</span>
                  <span className="flex items-center">
                    {material.percentage}%
                    {material.recyclable ? (
                      <Recycle className="h-3 w-3 ml-1 text-green-500" />
                    ) : (
                      <Trash className="h-3 w-3 ml-1 text-red-500" />
                    )}
                  </span>
                </div>
                <Progress value={material.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Disposal Method</h3>
          <Badge className="bg-green-500">{productInfo.disposal}</Badge>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Recycling Instructions</h3>
          <ul className="text-sm space-y-1">
            {productInfo.recyclingInstructions.map((instruction, index) => (
              <li key={index} className="text-muted-foreground">
                • {instruction}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1 text-yellow-500" />
            Environmental Impact
          </h3>
          <p className="text-sm text-muted-foreground">
            {productInfo.environmentalImpact} - Single-use plastics contribute to pollution.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Eco-Friendly Alternatives</h3>
          <ul className="text-sm space-y-1">
            {productInfo.alternatives.map((alternative, index) => (
              <li key={index} className="text-muted-foreground">
                • {alternative}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

