import React from "react"
import { Flex } from "@chakra-ui/core"
const Hero = ({ children, ...rest }) => {
  return (
    <Flex
      flexDirection="column"
      px={[10, 32]}
      justifyContent="center"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Hero
