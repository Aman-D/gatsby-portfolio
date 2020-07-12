import { theme as baseTheme } from "@chakra-ui/core"
console.log(baseTheme)
export const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: {
      background: "#183060",
      lightBlack: "#413A42",
    },
  },
  fonts: {
    body: "Titillium Web,system-ui, sans-serif",
    heading: "Titillium Web,Georgia, serif",
    mono: "Titillium Web,Menlo, monospace",
  },
  shadows: {
    ...baseTheme.shadows,
    lgWhite:
      "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
  },
}
