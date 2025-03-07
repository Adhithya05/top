"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function CollectionCenterMap() {
  const [mapLoaded, setMapLoaded] = useState(false)

  // This would be replaced with your actual Google Maps implementation
  // For the hackathon, you can use a simple iframe with a custom Google Map
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5831790171778!2d77.53632867381566!3d12.934494915822716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac121d1d!2sPES%20University!5e0!3m2!1sen!2sin!4v1709913427435!5m2!1sen!2sin"

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[600px] w-full">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <p>Loading map...</p>
            </div>
          )}
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setMapLoaded(true)}
            className={mapLoaded ? "opacity-100" : "opacity-0"}
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}

