import React from "react"
import * as allComponents from "../components/index"
import { MDXComponents as mdxComponents } from "../mdx-components"
import {
  Heading,
  Link,
  Stack,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
  Box,
  Icon,
  SimpleGrid,
  Image,
  IconButton,
  AspectRatioBox,
} from "@chakra-ui/core"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Pages = ({ data: { mdx } }) => {
  const MDXComponents = {
    ...allComponents,
    ...mdxComponents,
    Link,
    Box,
    SimpleGrid,
    Image,
    Flex,
    IconButton,
    Icon,
    AspectRatioBox,
    Button,
    FormControl,
    Input,
    Stack,
    Text,
    Heading,
  }
  return (
    <allComponents.Layout>
      <MDXProvider components={MDXComponents}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </allComponents.Layout>
  )
}

export default Pages

export const pageQuery = graphql`
  query page($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
      }
    }
  }
`
