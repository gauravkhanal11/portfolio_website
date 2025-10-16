"use client"

import type React from "react"

interface CardWrapperProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export function CardWrapper({ children, className = "", onClick, href }: CardWrapperProps) {
  const baseClasses = `rounded-lg p-6 border border-primary/20 opacity-100 bg-slate-800 ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  )
}
