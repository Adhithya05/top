"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Camera } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WasteIdentificationUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      setFile(selectedFile)

      const reader = new FileReader()
      reader.onload = (event) => {
        setPreview(event.target?.result as string)
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleAnalyze = () => {
    if (!file) return

    setIsAnalyzing(true)

    // Mock API call - replace with actual AI model integration
    setTimeout(() => {
      setIsAnalyzing(false)
      // This would trigger the results component to show data
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Waste Image</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upload">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload Image</TabsTrigger>
            <TabsTrigger value="camera">Use Camera</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div
              className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              {preview ? (
                <img src={preview || "/placeholder.svg"} alt="Preview" className="max-h-[200px] object-contain mb-4" />
              ) : (
                <>
                  <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG or JPEG (max. 10MB)</p>
                </>
              )}
              <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </div>

            <Button onClick={handleAnalyze} disabled={!file || isAnalyzing} className="w-full">
              {isAnalyzing ? "Analyzing..." : "Analyze Image"}
            </Button>
          </TabsContent>

          <TabsContent value="camera">
            <div className="space-y-4">
              <div className="border rounded-lg p-4 h-[250px] flex items-center justify-center bg-muted">
                <div className="text-center">
                  <Camera className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Camera access will be requested</p>
                </div>
              </div>

              <Button className="w-full">Take Photo</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

