"use client"

import { Button as ChakraButton } from "@chakra-ui/react"
import { colors, radius } from "@/ui/theme/tokens"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton
      bg={colors.primary}
      color="white"
      borderRadius={radius.md}
      _hover={{ opacity: 0.9 }}
      {...props}
    >
      {children}
    </ChakraButton>
  )
}
