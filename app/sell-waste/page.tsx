import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { SellWasteForm } from "@/components/sell-waste-form"
import { MarketRates } from "@/components/market-rates"

export default function SellWastePage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Sell Waste"
        description="List your recyclable waste for sale or find buyers for your materials."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <SellWasteForm />
        <MarketRates />
      </div>
    </DashboardShell>
  )
}

