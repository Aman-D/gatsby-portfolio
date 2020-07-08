import React from "react"
import { Flex } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { Text } from "@chakra-ui/core"

const Banner = ({ children, display, ...rest }) => {
  return (
    <Flex
      minH={display === "half" ? "50vh" : "100vh"}
      alignItems="center"
      justifyContent="center"
      flexDir={["column", "row"]}
      bg="primary.background"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Banner
