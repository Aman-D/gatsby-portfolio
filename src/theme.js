import { theme as baseTheme } from "@chakra-ui/core"

export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: {
      background: "#183060",
    },
  },
  fonts: {
    body: "Titillium Web,system-ui, sans-serif",
    heading: "Titillium Web,Georgia, serif",
    mono: "Titillium Web,Menlo, monospace",
  },
}
