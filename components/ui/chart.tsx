"use client"

import { forwardRef, type ReactNode } from "react"

interface ChartProps {
  className?: string
  children: ReactNode
}

export const Chart = forwardRef<HTMLDivElement, ChartProps>(({ className, children }, ref) => (
  <div ref={ref} className={`relative ${className}`}>
    {children}
  </div>
))

interface ChartContainerProps {
  className?: string
  data?: any[]
  children: ReactNode
}

export const ChartContainer = forwardRef<HTMLDivElement, ChartContainerProps>(({ className, children, data }, ref) => (
  <div ref={ref} className={`relative ${className}`} data-chart-container={JSON.stringify(data)}>
    {children}
  </div>
))

interface ChartLegendProps {
  className?: string
  children: ReactNode
}

export const ChartLegend = forwardRef<HTMLUListElement, ChartLegendProps>(({ className, children }, ref) => (
  <ul ref={ref} className={`flex gap-2 ${className}`}>
    {children}
  </ul>
))

interface ChartLegendItemProps {
  className?: string
  color: string
  children: ReactNode
}

export const ChartLegendItem = forwardRef<HTMLLIElement, ChartLegendItemProps>(
  ({ className, color, children }, ref) => (
    <li ref={ref} className={`flex items-center gap-1 ${className}`} style={{ color }}>
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      {children}
    </li>
  ),
)

interface ChartPieProps {
  className?: string
  data: any[]
  dataKey: string
  nameKey: string
  innerRadius?: number
  outerRadius?: number
  paddingAngle?: number
}

export const ChartPie = forwardRef<HTMLDivElement, ChartPieProps>(
  ({ className, data, dataKey, nameKey, innerRadius = 0, outerRadius = 100, paddingAngle = 0 }, ref) => (
    <div
      ref={ref}
      className={`relative ${className}`}
      data-chart-pie
      data-data={JSON.stringify(data)}
      data-datakey={dataKey}
      data-namekey={nameKey}
      data-innerradius={innerRadius}
      data-outerradius={outerRadius}
      data-paddingangle={paddingAngle}
    />
  ),
)

export const ChartTooltip = forwardRef<HTMLDivElement, any>(({ className }, ref) => (
  <div ref={ref} className={`absolute ${className}`} />
))

interface ChartBarProps {
  className?: string
  dataKey: string
  name: string
  fill: string
  radius?: number
}

export const ChartBar = forwardRef<HTMLDivElement, ChartBarProps>(
  ({ className, dataKey, name, fill, radius = 0 }, ref) => (
    <div
      ref={ref}
      className={`relative ${className}`}
      data-chart-bar
      data-datakey={dataKey}
      data-name={name}
      data-fill={fill}
      data-radius={radius}
    />
  ),
)

export const ChartGrid = forwardRef<HTMLDivElement, any>(({ className }, ref) => (
  <div ref={ref} className={`absolute ${className}`} />
))

interface ChartXAxisProps {
  className?: string
  dataKey: string
}

export const ChartXAxis = forwardRef<HTMLDivElement, ChartXAxisProps>(({ className, dataKey }, ref) => (
  <div ref={ref} className={`absolute ${className}`} data-chart-xaxis data-datakey={dataKey} />
))

interface ChartYAxisProps {
  className?: string
}

export const ChartYAxis = forwardRef<HTMLDivElement, ChartYAxisProps>(({ className }, ref) => (
  <div ref={ref} className={`absolute ${className}`} data-chart-yaxis />
))

interface ChartLineProps {
  className?: string
  dataKey: string
  stroke: string
  strokeWidth?: number
  dot?: any
}

export const ChartLine = forwardRef<HTMLDivElement, ChartLineProps>(
  ({ className, dataKey, stroke, strokeWidth = 1, dot }, ref) => (
    <div
      ref={ref}
      className={`relative ${className}`}
      data-chart-line
      data-datakey={dataKey}
      data-stroke={stroke}
      data-strokewidth={strokeWidth}
      data-dot={JSON.stringify(dot)}
    />
  ),
)

