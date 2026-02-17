"use client"

import { Badge as ChakraBadge } from "@chakra-ui/react"

interface BadgeProps {
  children: React.ReactNode
  variant?: "solid" | "outline" | "subtle"
  colorPalette?: string
}

export const Badge = ({
  children,
  variant = "subtle",
  colorPalette = "gray",
}: BadgeProps) => {
  return (
    <ChakraBadge variant={variant} colorPalette={colorPalette}>
      {children}
    </ChakraBadge>
  )
}
