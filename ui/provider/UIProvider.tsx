"use client"

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"

import { ThemeProvider } from "next-themes"

const system = createSystem(defaultConfig)

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ThemeProvider>
  )
}
