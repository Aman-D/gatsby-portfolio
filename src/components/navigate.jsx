import React from "react"
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core"
import { motion } from "framer-motion"
const Navigate = () => {
  const MotionMenuButton = motion.custom(MenuButton)
  return (
    <Menu>
      <MotionMenuButton
        as={Button}
        rightIcon="chevron-down"
        position="fixed"
        top={150}
        left={2}
        bg="primary.lightBlack"
        letterSpacing="wider"
        transformOrigin="top left"
        _hover={{}}
        initial={{
          rotateZ: -90,
        }}
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 400,
        }}
        whileHover={{}}
      >
        Navigate To
      </MotionMenuButton>
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
