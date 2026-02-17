"use client"

import { useState } from "react"

import { Input } from "@/ui/components/Input"
import { Card } from "@/ui/components/Card"
import { Select } from "@/ui/components/Select"
import { Modal } from "@/ui/components/Modal"
import { Button } from "@/ui/components/Button"
import { ThemeToggle } from "@/ui/components/ThemeToggle"
import { Separator } from "@/ui/components/Separator"
import { Stack, Text } from "@chakra-ui/react"
import { Badge } from "@/ui/components/Badge"
import { Wrap } from "@/ui/components/Wrap"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [role, setRole] = useState("")
  const [date, setDate] = useState<Date | null>(null)

  return (
    <main style={{ padding: "40px", display: "grid", gap: "20px" }}>
      {/* <Card>
      </Card> */}

      <Input placeholder="Enter name" />

      <Select
        options={[
          { label: "Admin", value: "admin" },
          { label: "User", value: "user" },
        ]}
        value={role}
        onValueChange={(val) => setRole(val)}
      />

      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Foundation Modal"
      >
        This is your wrapped modal.
      </Modal>

      <Stack>
        <Text>First</Text>
        <Separator />
        <Text>Second</Text>
        <Separator />
        <Text>Third</Text>
      </Stack>

      <Wrap>
        <Badge>Badge 1</Badge>
        <Badge colorPalette="blue">Badge 2</Badge>
        <Badge variant="solid" colorPalette="green">
          Badge 3
        </Badge>
      </Wrap>

      <ThemeToggle />
    </main>
  )
}
