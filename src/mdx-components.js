/**
 * @description custom html elements for markdown
 */

import React from "react"
import { Text, Image, Box } from "@chakra-ui/core"

export const MDXComponents = {
  h1: ({ children, ...rest }) => (
    <Text
      fontSize={["4xl", "5xl"]}
      textShadow="md"
      fontWeight="semibold"
      {...rest}
    >
      {children}
    </Text>
  ),
  p: ({ children, ...rest }) => (
    <Text fontSize={["md", "xl"]} fontWeight="medium" {...rest}>
      {children}
    </Text>
  ),
}
