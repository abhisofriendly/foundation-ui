"use client"

import { Button } from "@chakra-ui/react"
import { useTheme } from "next-themes"

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  return (
    <Button onClick={() => setTheme(isDark ? "light" : "dark")}>
      Toggle Theme
    </Button>
  )
}
