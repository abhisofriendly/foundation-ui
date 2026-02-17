"use client"

import { Button } from "@/ui/components/Button"

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onClick={() => console.log("Foundation working")}>
        Foundation Button
      </Button>
    </main>
  )
}
