import React, { useState } from "react"
import { Flex, Text, Box } from "@chakra-ui/core"
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core"
import { motion, AnimatePresence } from "framer-motion"

const WhyMe = ({ children, initial, ...rest }) => {
  const MotionBox = motion.custom(Text)
  const Page = ({ children, ...rest }) => {
    return (
      <AccordionItem my={[2, 5]} {...rest}>
        {children.map(({ props: { mdxType, children, ...rest } }, index) => {
          if (mdxType === "h1") {
            return (
              <AccordionHeader
                boxShadow="lg"
                key={index}
                p={5}
                bg="white"
                color="black"
                borderRadius="lg"
                _hover={{
                  backgroundColor: "pink.500",
                  color: "white",
                }}
                _active={{
                  backgroundColor: "pink.500",
                  color: "white",
                }}
              >
                <MotionBox
                  flex="1"
                  textAlign="left"
                  initial={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 100,
                  }}
                >
                  {children}
                </MotionBox>
                <AccordionIcon />
              </AccordionHeader>
            )
          }
          if (mdxType === "p") {
            return (
              <AccordionPanel
                pb={4}
                key={index}
                p={[5, 20]}
                textAlign="justify"
              >
                <p>{children}</p>
              </AccordionPanel>
            )
          }
        })}
      </AccordionItem>
    )
  }

  children = !children.length ? [children] : children

  return (
    <Accordion allowToggle {...rest}>
      {children.map(({ props: { mdxType, children, ...rest } }, index) => {
        if (mdxType === "WhyMeHead") {
          return (
            <Box key={index} {...rest}>
              {children}
            </Box>
          )
        }
        if (mdxType === "Page") {
          return (
            <Page key={index} {...rest}>
              {children}
            </Page>
          )
        }
      })}
    </Accordion>
  )
}

export default WhyMe
