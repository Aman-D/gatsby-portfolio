import React from "react"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { Header, Navigate } from "./index"
import { theme } from "../theme"
const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Header />
        <Navigate />
        <main>{children}</main>
      </ThemeProvider>
    </>
  )
}

export default Layout
