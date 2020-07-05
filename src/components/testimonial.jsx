import React, { useState } from "react"
import { Box, Flex, Text, Image } from "@chakra-ui/core"
import { motion } from "framer-motion"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
const Testimonial = ({ children, ...rest }) => {
  const MotionCard = motion.custom(Flex)

  const Card = ({ children, name, position, ...rest }) => {
    return (
      <MotionCard
        direction="column"
        boxShadow="xl"
        p={4}
        maxW={["320 !important", "420px !important"]}
        minW={["320 !important", "420px !important"]}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        {...rest}
      >
        {children.map(({ props }, index) => {
          if (props.mdxType === "img") {
            return (
              <Image
                key={index}
                src={props.src}
                size={20}
                borderRadius="50%"
                objectFit="cover"
                alignSelf="center"
                border="2px solid white"
              />
            )
          }

          if (props.mdxType === "p") {
            return (
              <Flex flexDirection="column" textAlign="center" key={index}>
                <Text p={4}>
                  {name},{position}
                </Text>

                <Text>{props.children}</Text>
              </Flex>
            )
          }
        })}
      </MotionCard>
    )
  }

  children = !children.length ? [children] : children
  const [tabIndex, setIndex] = useState(0)

  const next = () => {
    if (tabIndex < children.length - 1) {
      setIndex(tabIndex + 1)
    }
  }

  const prev = () => {
    if (tabIndex > 0) {
      setIndex(tabIndex - 1)
    }
  }
  return (
    <Box {...rest} position="relative">
      <>
        {children.map(({ props }, index) => {
          if (props.mdxType === "Box") {
            return (
              <Card
                display={tabIndex === index ? "flex" : "none"}
                key={index}
                name={props.name}
                position={props.position}
              >
                {props.children}
              </Card>
            )
          }
        })}
        <Box
          as={MdNavigateBefore}
          onClick={prev}
          boxShadow="md"
          boxSizing="content-box"
          p={[1, 4]}
          position="absolute"
          top={["110%", "50%"]}
          left={["10%", "-15%"]}
          transform="translate(-15%,-50%)"
          bg="#413A42"
          color="white"
        />
        <Box
          as={MdNavigateNext}
          onClick={next}
          boxShadow="md"
          boxSizing="content-box"
          p={[1, 4]}
          position="absolute"
          top={["110%", "50%"]}
          right={["10%", "-15%"]}
          transform="translate(15%,-50%)"
          bg="#413A42"
          color="white"
        />
      </>
    </Box>
  )
}

export default Testimonial
