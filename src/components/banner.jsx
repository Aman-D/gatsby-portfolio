import React from "react"
import { Flex } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { Text } from "@chakra-ui/core"

const Banner = ({ children, ...rest }) => {
  return (
    <Flex
      minH="100vh"
      minW="100vw"
      alignItems="center"
      flexDir={["column", "row"]}
      bg="primary.background"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Banner
