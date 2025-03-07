import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { WasteIdentificationUpload } from "@/components/waste-identification-upload"
import { WasteIdentificationResults } from "@/components/waste-identification-results"

export default function IdentifyWastePage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Identify Waste"
        description="Upload an image to identify waste materials and get disposal recommendations."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <WasteIdentificationUpload />
        <WasteIdentificationResults />
      </div>
    </DashboardShell>
  )
}

