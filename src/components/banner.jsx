import React from "react"
import { Flex } from "@chakra-ui/core"

const Banner = ({ children, display, ...rest }) => {
  return (
    <Flex
      minW="100vw"
      minH={display === "half" ? "50vh" : "100vh"}
      justifyContent="center"
      flexDir={["column", "row"]}
      bg="white"
      color="black"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Banner
