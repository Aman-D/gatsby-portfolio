import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import Header from "./header"
import { theme } from "../theme"
const Layout = ({ children }) => {
  console.log(theme)
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout
