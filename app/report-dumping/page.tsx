import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { DumpingReportForm } from "@/components/dumping-report-form"
import { RecentDumpingReports } from "@/components/recent-dumping-reports"

export default function ReportDumpingPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Report Illegal Dumping"
        description="Report illegal waste dumping sites to help keep our communities clean."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <DumpingReportForm />
        <RecentDumpingReports />
      </div>
    </DashboardShell>
  )
}

