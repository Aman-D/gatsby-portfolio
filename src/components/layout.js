import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <CSSReset />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout
