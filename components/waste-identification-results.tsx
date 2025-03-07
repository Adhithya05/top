"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Recycle, Trash, DollarSign, AlertTriangle } from "lucide-react"

export function WasteIdentificationResults() {
  // Mock data - replace with actual AI model results
  const results = {
    materials: [
      { name: "PET Plastic", percentage: 65, recyclable: true },
      { name: "HDPE Plastic", percentage: 20, recyclable: true },
      { name: "Mixed Plastic", percentage: 10, recyclable: false },
      { name: "Other", percentage: 5, recyclable: false },
    ],
    disposal: "Recyclable - Plastic Bin",
    confidence: 92,
    potentialValue: "₹15-20/kg",
    warnings: ["May contain contaminants", "Remove labels for better recycling"],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Material Composition</h3>
          <div className="space-y-3">
            {results.materials.map((material, index) => (
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

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-medium">Disposal Method</h3>
            <Badge className="bg-green-500">{results.disposal}</Badge>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-medium">Confidence</h3>
            <span className="text-sm">{results.confidence}%</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-medium flex items-center">
              <DollarSign className="h-3 w-3 mr-1" />
              Potential Value
            </h3>
            <span className="text-sm">{results.potentialValue}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1 text-yellow-500" />
            Warnings
          </h3>
          <ul className="text-sm space-y-1">
            {results.warnings.map((warning, index) => (
              <li key={index} className="text-muted-foreground">
                • {warning}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

