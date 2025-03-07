import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CollectionCenterMap } from "@/components/collection-center-map"
import { CollectionCenterFilters } from "@/components/collection-center-filters"

export default function CollectionCentersPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Collection Centers"
        description="Find nearby waste collection centers, recycling facilities, and scrap dealers."
      />
      <div className="grid gap-4">
        <CollectionCenterFilters />
        <CollectionCenterMap />
      </div>
    </DashboardShell>
  )
}

