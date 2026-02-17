"use client"

import { Wrap as ChakraWrap } from "@chakra-ui/react"

export const Wrap = ({ children }: { children: React.ReactNode }) => {
  return <ChakraWrap gap="2">{children}</ChakraWrap>
}
