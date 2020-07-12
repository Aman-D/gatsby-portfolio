import React, { useState } from "react"
import {
  Flex,
  Box,
  Grid,
  Text,
  Button,
  Link,
  Image,
  Divider,
} from "@chakra-ui/core"
import { GrGithub } from "react-icons/gr"
import Tag from "./tag"
import { experience } from "../experience"
import { motion } from "framer-motion"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"
const Experience = () => {
  const [tabIndex, setIndex] = useState(0)
  const MotionGrid = motion.custom(Grid)
  const MotionBox = motion.custom(Box)
  const next = () => {
    if (tabIndex < experience.length - 1) {
      setIndex(tabIndex + 1)
    }
  }

  const prev = () => {
    if (tabIndex > 0) {
      setIndex(tabIndex - 1)
    }
  }
  const Section = props => {
    return (
      <MotionBox
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <>
          {experience.map((exp, index) => (
            <MotionGrid
              templateColumns={["1fr", "2fr 1fr"]}
              maxW={["320px !important", "80%  !important"]}
              gridGap={5}
              display={tabIndex === index ? "flex" : "none"}
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              drag="x"
              onDrag={(event, info) => {
                info && info.point.x < 0 ? next() : prev()
              }}
              dragConstraints={{ left: -1, right: 1 }}
              boxShadow="lg"
              minH="430px"
            >
              <Flex direction="column" w="100%" p={[5, 10]}>
                <Text fontSize="2xl">{exp.title}</Text>
                <Text fontSize="sm" my={1}>
                  {exp.startDate} - {exp.endDate}
                </Text>
                <Text fontSize="md" flexGrow="1">
                  {exp.body}
                </Text>
                <Divider bg="gray.100" />
                <Flex flexWrap="wrap">
                  <Tag title="React" />
                  <Tag title="React" />
                  <Tag title="React" />
                </Flex>

                <Flex>
                  <Link href={exp.github}>
                    <Button leftIcon={GrGithub}>Github</Button>
                  </Link>
                  <Link href={exp.project}>
                    <Button leftIcon={GrGithub}>Project</Button>
                  </Link>
                  <Link href={exp.more}>
                    <Button leftIcon={GrGithub}>More</Button>
                  </Link>
                </Flex>
              </Flex>
              <Flex
                display={["none", "flex"]}
                w="100%"
                justify="center"
                align="center"
              >
                <Image src="images/b8.png" />
              </Flex>
            </MotionGrid>
          ))}
          <Box
            display={["none", "block"]}
            as={MdNavigateBefore}
            onClick={prev}
            boxShadow="md"
            boxSizing="content-box"
            p={[1, 4]}
            position="absolute"
            top={["110%", "50%"]}
            left={["10%", "-5%"]}
            transform="translate(0,-50%)"
            bg="#413A42"
            color="white"
          />
          <Box
            display={["none", "block"]}
            as={MdNavigateNext}
            onClick={next}
            boxShadow="md"
            boxSizing="content-box"
            p={[1, 4]}
            position="absolute"
            top={["110%", "50%"]}
            right={["10%", "-5%"]}
            transform="translate(0,-50%)"
            bg="#413A42"
            color="white"
          />
        </>
      </MotionBox>
    )
  }

  return (
    <Flex flexDir="column" align="center">
      <Section />
      <Flex>
        {experience.map(({ id, index }) => (
          <Box
            key={id}
            onClick={() => setIndex(id - 1)}
            border={id - 1 === tabIndex ? "2px solid #000" : ""}
            size={[3, 5]}
            bg={id - 1 === tabIndex ? "blue.100" : "gray.100"}
            borderRadius="50%"
            m={4}
            _hover={{ bg: "blue.300" }}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Experience
