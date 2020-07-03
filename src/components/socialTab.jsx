import React from "react"
import { Flex, Box } from "@chakra-ui/core"
import { GrLinkedinOption, GrGithub, GrMail } from "react-icons/gr"

const SocialTab = ({ dir, iconSize, ...rest }) => {
  const social = [
    {
      icon: GrLinkedinOption,
      color: "#0077B7",
      link: "https://www.linkedin.com/in/aman-dhurwey-3a9040187/",
      title: "Linkedin",
    },
    {
      icon: GrGithub,
      color: "#080808",
      link: "https://github.com/Aman-D",
      title: "Github",
    },
    {
      icon: GrMail,
      color: "#D54B3D",
      link: "mailto:dhurweyrock@gmail.com",
      title: "Gmail",
    },
  ]

  return (
    <Flex flexDirection={dir} {...rest} alignItems="center">
      {social.map(({ icon, color, link, title }, index) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
          <Box as={icon} fontSize={iconSize} mx={4} title={title} />
        </a>
      ))}
    </Flex>
  )
}

export default SocialTab
