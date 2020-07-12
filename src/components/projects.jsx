import React from "react"
import { projects } from "../projects"
import { Flex, Image, Text, Box, Button, Link } from "@chakra-ui/core"
import Tag from "./tag"
import { GrGithub } from "react-icons/gr"
const Projects = () => {
  return (
    <Flex flexWrap="wrap">
      {projects.map((project, index) => (
        <Flex
          direction="column"
          maxWidth={320}
          my={5}
          mx={[0, 5]}
          boxShadow="lg"
          key={index}
          p={5}
        >
          <Box>
            <Image scr="" fallbackSrc="https://via.placeholder.com/150" />
          </Box>
          <Flex flexWrap="wrap">
            <Tag title="React" />
            <Tag title="React" />
            <Tag title="React" />
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nostrum, culpa quia nesciunt architecto quaerat aliquam ipsum! Modi
            error sunt, neque deserunt amet soluta deleniti accusantium
            repudiandae atque non exercitationem?
          </Text>
          <Flex>
            <Link href="">
              <Button leftIcon={GrGithub}>Github</Button>
            </Link>
            <Link href="">
              <Button leftIcon={GrGithub}>Project</Button>
            </Link>
            <Link href="">
              <Button leftIcon={GrGithub}>More</Button>
            </Link>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}

export default Projects
