import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import Header from "./header"
import { theme } from "../theme"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Header />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
