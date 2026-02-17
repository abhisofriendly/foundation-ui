"use client"

import { Separator as ChakraSeparator } from "@chakra-ui/react"

interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
}

export const Separator = ({ orientation = "horizontal" }: SeparatorProps) => {
  return <ChakraSeparator orientation={orientation} />
}
