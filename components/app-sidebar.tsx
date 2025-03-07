"use client"

import { BarChart, MapPin, DollarSign, Building2, Image, AlertTriangle, Barcode, Home, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/",
    },
    {
      title: "Analytics",
      icon: BarChart,
      href: "/analytics",
    },
    {
      title: "Collection Centers",
      icon: MapPin,
      href: "/collection-centers",
    },
    {
      title: "Sell Waste",
      icon: DollarSign,
      href: "/sell-waste",
    },
    {
      title: "Brand Dashboard",
      icon: Building2,
      href: "/brand-dashboard",
    },
    {
      title: "Identify Waste",
      icon: Image,
      href: "/identify-waste",
    },
    {
      title: "Report Dumping",
      icon: AlertTriangle,
      href: "/report-dumping",
    },
    {
      title: "Barcode Scan",
      icon: Barcode,
      href: "/barcode-scan",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">ET</span>
          </div>
          <span className="text-lg font-bold">EcoTrack</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((route) => (
                <SidebarMenuItem key={route.href}>
                  <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.title}>
                    <Link href={route.href}>
                      <route.icon className="h-5 w-5" />
                      <span>{route.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </div>
          <ModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

