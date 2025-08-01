import type React from "react"

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
}

export function CardWrapper({ children, className = "" }: CardWrapperProps) {
  return <div className={`rounded-lg p-6 border border-primary/20 opacity-100 bg-slate-800 ${className}`}>{children}</div>
}
