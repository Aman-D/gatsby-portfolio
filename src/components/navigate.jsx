import React from "react"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core"
import { motion } from "framer-motion"
const Navigate = () => {
  const MotionMenuButton = motion.custom(MenuButton)
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon="chevron-down"
        position="fixed"
        top={150}
        left={2}
        bg="primary.lightBlack"
        letterSpacing="wider"
        transformOrigin="top left"
        _hover={{}}
        zIndex="overlay"
      >
        Navigate To
      </MenuButton>
      <MenuList bg="primary.lightBlack">
        <MenuItem>Intro</MenuItem>
        <MenuItem>Testimonial</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem as="a" href="#">
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default Navigate
