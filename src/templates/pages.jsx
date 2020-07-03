import React from "react"
import * as allComponents from "../components/index"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Pages = () => {
  return (
    <allComponents.Layout>
      <MDXProvider>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </allComponents.Layout>
  )
}

export default Pages
