import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BrandSelector } from "@/components/brand-selector"
import { BrandComplianceStats } from "@/components/brand-compliance-stats"
import { BrandCollectionChart } from "@/components/brand-collection-chart"
import { BrandGeographicDistribution } from "@/components/brand-geographic-distribution"

export default function BrandDashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Brand EPR Dashboard"
        description="Track Extended Producer Responsibility compliance and recycling metrics."
      />
      <BrandSelector />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <BrandComplianceStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <BrandCollectionChart />
        <BrandGeographicDistribution />
      </div>
    </DashboardShell>
  )
}

