import React, { useState } from "react"
import { Box, Flex, Text, Image } from "@chakra-ui/core"
import { motion } from "framer-motion"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
import { testimonial } from "../testimonial"
const Testimonial = ({ children, ...rest }) => {
  const MotionCard = motion.custom(Flex)

  const [tabIndex, setIndex] = useState(0)

  const next = () => {
    if (tabIndex < testimonial.length - 1) {
      setIndex(tabIndex + 1)
    }
  }

  const prev = () => {
    if (tabIndex > 0) {
      setIndex(tabIndex - 1)
    }
  }
  return (
    <Box position="relative" {...rest}>
      <>
        {testimonial.map(({ id, name, position, words, img }, index) => {
          return (
            <MotionCard
              display={tabIndex === index ? "flex" : "none"}
              direction="column"
              boxShadow="xl"
              p={4}
              maxW={["320 !important", "420px !important"]}
              minW={["320 !important", "420px !important"]}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              {...rest}
            >
              <Image
                src={img}
                size={20}
                borderRadius="50%"
                objectFit="cover"
                alignSelf="center"
                border="2px solid white"
              />
              <Flex flexDirection="column" textAlign="center">
                <Text p={4}>
                  {name},{position}
                </Text>

                <Text>{words}</Text>
              </Flex>
            </MotionCard>
          )
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
