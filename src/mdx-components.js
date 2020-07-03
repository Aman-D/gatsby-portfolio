/**
 * @description custom html elements for markdown
 */

import React from "react"
import { Text } from "@chakra-ui/core"

export const MDXComponents = {
  h1: props => <Text fontSize="2xl">{props.children}</Text>,
}
