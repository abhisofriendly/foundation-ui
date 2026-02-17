"use client"

import { Box } from "@chakra-ui/react"
import { colors, radius } from "@/ui/theme/tokens"

interface CardProps {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return (
    <Box p="24px" borderRadius={radius.lg} boxShadow="md">
      {children}
    </Box>
  )
}
