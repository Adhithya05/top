import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { OverviewStats } from "@/components/overview-stats"
import { WasteByMaterialChart } from "@/components/waste-by-material-chart"
import { WasteByRegionChart } from "@/components/waste-by-region-chart"
import { RecyclingRatesChart } from "@/components/recycling-rates-chart"
import { RecentReports } from "@/components/recent-reports"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" description="Overview of waste management metrics and analytics." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverviewStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
        <div className="col-span-2">
          <WasteByRegionChart />
        </div>
        <div>
          <WasteByMaterialChart />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <RecyclingRatesChart />
        <RecentReports />
      </div>
    </DashboardShell>
  )
}

