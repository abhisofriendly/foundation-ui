"use client"

import { Input as ChakraInput, Field } from "@chakra-ui/react"

import { radius } from "@/ui/theme/tokens"

interface InputProps {
  label?: string
  placeholder?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <Field.Root>
      {label && <Field.Label>{label}</Field.Label>}
      <ChakraInput borderRadius={radius.md} {...props} />
    </Field.Root>
  )
}
