import React from "react"
import { Banner, Layout, Hero, IconAnimation } from "../components/index"
import { Text } from "@chakra-ui/core"

const Index = () => {
  return (
    <Layout>
      {/* Intro part starts here*/}
      <Banner id="home" justifyContent="center" alignItems="center" p={[6, 30]}>
        <Hero>
          <Text fontSize="xl">
            Hello! <br /> I am a{" "}
            <Text as="mark" fontSize={["xl", "3xl"]}>
              Full Stack developer{" "}
            </Text>
            . I love making web applcations with main focus on performance,
            optimization, creativity and robustness.
          </Text>
        </Hero>
        <IconAnimation />
      </Banner>
      {/* Intro part ends here*/}
      {/* Intro part starts here*/} {/* Intro part starts here*/}
    </Layout>
  )
}

export default Index
