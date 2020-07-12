import React from "react"
import { Flex } from "@chakra-ui/core"
const Hero = ({ children, ...rest }) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={[4, 32]}
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Hero
