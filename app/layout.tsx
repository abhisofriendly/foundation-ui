import { UIProvider } from "@/ui/provider/UIProvider"
import { Box } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <UIProvider>
          <Box minH="100vh" bg="bg" color="fg">
            {children}
          </Box>
        </UIProvider>
      </body>
    </html>
  )
}
