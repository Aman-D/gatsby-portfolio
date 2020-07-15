import React, { useState } from "react"
import { Box, Flex, Text, Icon, Link } from "@chakra-ui/core"
import { motion } from "framer-motion"
import { GiHamburgerMenu } from "react-icons/gi"

const links = [
  {
    to: "#home",
    name: "Home",
  },
  {
    to: "#expertise",
    name: "Expertise",
  },
  {
    to: "#experience",
    name: "Experience",
  },
  {
    to: "#projects",
    name: "Projects",
  },
]

const Navigate = () => {
  // const MotionMenuButton = motion.custom(MenuButton)
  const MotionBox = motion.custom(Box)
  const Nav = props => {
    return (
      <Flex flexDir={["column", "row"]} {...props}>
        {links.map(({ to, name }) => (
          <Link
            p={1}
            borderRadius="md"
            boxShadow="lg"
            bg="white"
            color="black"
            m={2}
            href={to}
            onClick={() => setIsOpen(!isOpen)}
          >
            {name}
          </Link>
        ))}
      </Flex>
    )
  }

  const [isOpen, setIsOpen] = useState(false)
  const Toggle = props => {
    return (
      <Box
        position="absolute"
        bg="white"
        color="primary.lightBlack"
        top="0%"
        left="0"
        size="50"
        borderRadius="50%"
        transformOrigin="center"
        p={3}
        boxShadow="lg"
        {...props}
      >
        <Box as={GiHamburgerMenu} size={5} />
      </Box>
    )
  }

  const variants = {
    open: { opacity: 1, x: 30 },
    closed: { opacity: 0, x: -150 },
  }

  return (
    <Box zIndex="tooltip" w="50%" top={10} left={10} position="fixed">
      <MotionBox
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{ ease: "easeOut", duration: 0.2 }}
        variants={variants}
        layout
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Nav justifyContent="space-between" w="100%" mx={10} />
      </MotionBox>
      <Toggle onClick={() => setIsOpen(!isOpen)} />
    </Box>
  )
}

export default Navigate
