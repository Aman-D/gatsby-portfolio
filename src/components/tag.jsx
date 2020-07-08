import React from "react"
import { Flex, Text, Box } from "@chakra-ui/core"
import { FcHome } from "react-icons/fc"

const Icons = {
  home: FcHome,
}

const Tag = ({ title, logo, ...rest }) => {
  return (
    <Flex
      alignItems="center"
      bg="gray.100"
      w="fit-content"
      px={2}
      py={1}
      my={5}
      mx={2}
      {...rest}
    >
      {logo && <Box as={Icons[logo]} mx={2} />}
      <Text>{title}</Text>
    </Flex>
  )
}

export default Tag
