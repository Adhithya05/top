"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, BarcodeIcon } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function BarcodeScannerComponent() {
  const [barcodeValue, setBarcodeValue] = useState<string>("")
  const [isScanning, setIsScanning] = useState(false)

  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBarcodeValue(e.target.value)
  }

  const handleStartScanning = () => {
    setIsScanning(true)
    // In a real implementation, this would initialize the camera and barcode scanner
    // For the hackathon, we'll simulate scanning after a delay
    setTimeout(() => {
      setBarcodeValue("8901030704994") // Example Bisleri bottle barcode
      setIsScanning(false)
    }, 3000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Scan Product Barcode</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="camera">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="camera">Camera Scan</TabsTrigger>
            <TabsTrigger value="manual">Manual Entry</TabsTrigger>
          </TabsList>

          <TabsContent value="camera" className="space-y-4">
            <div className="border rounded-lg p-4 h-[250px] flex items-center justify-center bg-muted">
              {isScanning ? (
                <div className="text-center animate-pulse">
                  <Camera className="h-10 w-10 mx-auto text-primary mb-2" />
                  <p className="text-sm">Scanning...</p>
                </div>
              ) : (
                <div className="text-center">
                  <Camera className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Position barcode in front of camera</p>
                </div>
              )}
            </div>

            <Button onClick={handleStartScanning} disabled={isScanning} className="w-full">
              {isScanning ? "Scanning..." : "Start Scanning"}
            </Button>
          </TabsContent>

          <TabsContent value="manual" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="barcode">Enter Barcode Number</Label>
              <div className="flex space-x-2">
                <Input
                  id="barcode"
                  placeholder="e.g., 8901030704994"
                  value={barcodeValue}
                  onChange={handleManualInput}
                />
                <Button variant="outline" size="icon">
                  <BarcodeIcon className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">Enter the 12 or 13-digit barcode number from the product</p>
            </div>

            <Button disabled={!barcodeValue} className="w-full">
              Look Up Product
            </Button>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

