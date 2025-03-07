import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BarcodeScannerComponent } from "@/components/barcode-scanner"
import { ProductMaterialInfo } from "@/components/product-material-info"

export default function BarcodeScanPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Barcode Scanner"
        description="Scan product barcodes to get material composition and recycling information."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <BarcodeScannerComponent />
        <ProductMaterialInfo />
      </div>
    </DashboardShell>
  )
}

