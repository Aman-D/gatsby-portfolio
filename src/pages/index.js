import React from "react"
import {
  Banner,
  Layout,
  Hero,
  IconAnimation,
  Testimonial,
  Profession,
  Skills,
  Experience,
  Projects,
} from "../components/index"
import { Text, Box, Flex, Image, Button, Link, Icon } from "@chakra-ui/core"
import { List, ListItem, ListIcon } from "@chakra-ui/core"
import "../css/index.css"

const Index = () => {
  return (
    <Layout>
      {/* Intro part starts here*/}
      <Banner
        id="home"
        position="relative"
        justifyContent="center"
        alignItems="center"
        p={[4, 30]}
        bg="primary.lightBlack"
      >
        <Hero>
          <Text fontSize="xl">
            Hello! <br /> I am a{" "}
            <Text as="mark" fontSize={["xl", "3xl"]}>
              Full Stack developer{" "}
            </Text>
            . I love making web applcations with main focus on performance,
            optimization, creativity and robustness.
          </Text>
          <Flex alignSelf="start" alignItems="center" my={4}>
            <Button bg="primary.lightBlack" color="white" size="sm" _hover={{}}>
              Resume
            </Button>
            <Link href="#" mx={3}>
              Contact Me <Icon name="external-link" />
            </Link>
          </Flex>
        </Hero>
        <IconAnimation />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          zIndex="hide"
          bg="white"
          className="banner"
        />
      </Banner>

      {/* Expertise part here*/}
      <Banner
        id="expertise"
        bg="primary.lightBlack"
        position="relative"
        flexDir="column"
        p={[4, 20]}
      >
        <Text
          textAlign="center"
          zIndex="tooltip"
          fontSize={["4xl", "6xl"]}
          my={10}
          color="white"
        >
          My Expertise in..
        </Text>
        <Flex flexDir={["column", "row"]} color="white">
          <Flex flexDir="column" p={[4, 5]} fontSize="lg">
            <Text fontSize="xl" textAlign="center" mb={5} fontWeight="bolder">
              Front End Development
            </Text>
            <Skills
              skills={[
                "Professional Level experience in React",
                "Good understanding of Redux, React Hooks and Context Api ",
                "Worked on Gatsby to create static page websites",
                "Good with CSS, SASS, Styled-Components",
                "Have worked on GSAP and Framer Motion for animations",
              ]}
            />
          </Flex>
          <Flex flexDir="column" p={[4, 5]} fontSize="lg">
            <Text fontSize="xl" textAlign="center" mb={5} fontWeight="bolder">
              Back End Development
            </Text>
            <Skills
              skills={[
                `Hands on experience on Node and Django`,
                "Have worked on EJS template",
                "Good understanding of MongoDb and SQL",
                "Can make good RESTful APIs and also have knowledge of GraphQl",
                "Have a good understanding of Database modelling.",
              ]}
            />
          </Flex>
          <Flex flexDir="column" p={[4, 5]} fontSize="lg">
            <Text fontSize="xl" textAlign="center" mb={5} fontWeight="bolder">
              Full Stack Development
            </Text>
            <Skills
              skills={[
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              ]}
            />
          </Flex>
        </Flex>
        {/* <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          zIndex="base"
          bg="primary.lightBlack"
        /> */}
      </Banner>

      {/* Experience part here*/}
      <Banner id="experience" position="relative" flexDir="column" p={[5, 32]}>
        <Text
          textAlign="center"
          color="white"
          fontSize={["4xl", "6xl"]}
          my={10}
        >
          Experience
        </Text>
        <Experience />
        <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          zIndex="hide"
          bg="primary.lightBlack"
          className="experience"
        />
      </Banner>

      {/* Projects part here*/}
      <Banner id="projects" position="relative" flexDir="column" p={[5, 32]}>
        <Text
          textAlign="center"
          color="primary.black"
          fontSize={["4xl", "6xl"]}
          my={10}
        >
          My Projects
        </Text>
        <Projects />
        {/* <Box
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          zIndex="hide"
          bg="primary.lightBlack"
          className="projects"
        /> */}
      </Banner>

      {/* Testimonial starts here*/}
      <Banner
        position="relative"
        alignItems="center"
        flexDir="column"
        display="half"
        p={[4, 32]}
        bg="primary.lightBlack"
      >
        <Text zIndex="tooltip" color="white" fontSize={["4xl", "6xl"]} my={10}>
          Testimonial
        </Text>
        <Testimonial />
      </Banner>
    </Layout>
  )
}

export default Index
