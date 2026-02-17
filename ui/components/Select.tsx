"use client"

import { Select as ChakraSelect, createListCollection } from "@chakra-ui/react"

interface SelectProps {
  options: { label: string; value: string }[]
  value?: string
  onValueChange?: (value: string) => void
}

export const Select = ({ options, value, onValueChange }: SelectProps) => {
  const collection = createListCollection({
    items: options,
  })

  return (
    <ChakraSelect.Root
      collection={collection}
      value={value ? [value] : []}
      onValueChange={(details) => onValueChange?.(details.value[0])}
    >
      <ChakraSelect.Trigger>
        <ChakraSelect.ValueText placeholder="Select option" />
      </ChakraSelect.Trigger>

      <ChakraSelect.Content>
        {collection.items.map((item) => (
          <ChakraSelect.Item key={item.value} item={item}>
            <ChakraSelect.ItemText>{item.label}</ChakraSelect.ItemText>
          </ChakraSelect.Item>
        ))}
      </ChakraSelect.Content>
    </ChakraSelect.Root>
  )
}
