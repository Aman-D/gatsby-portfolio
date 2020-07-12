import React from "react"
import { useState, useEffect } from "react"
import { Box, List, ListItem, ListIcon } from "@chakra-ui/core"
import { motion } from "framer-motion"
import { shuffle } from "lodash"
import { GrGatsbyjs, GrReactjs, GrNode, GrMysql } from "react-icons/gr"
import { DiMongodb, DiDjango, DiJavascript1 } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa"

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 200,
}

const IconAnimation = () => {
  const [colors, setColors] = useState(initialColors)
  const MotionLi = motion.custom(ListItem)

  useEffect(() => {
    var timeout = setTimeout(() => setColors(shuffle(colors)), 1800)
    return clearTimeout(timeout)
  }, [colors, setColors])

  return (
    <Box>
      <List
        display={["none", "flex"]}
        pos="relative"
        w="320px"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {colors.map(({ icon, color }, index) => (
          <MotionLi
            key={index}
            layoutTransition={spring}
            style={{
              borderRadius: "10px",
              marginBottom: "10px",
              marginRight: "10px",
              width: "140px",
              height: "140px",
              display: "grid",
              placeItems: "center",
            }}
            whileHover={{
              color,
            }}
            color="primary.lightBlack"
          >
            <Box as={icon} fontSize="6xl" />
          </MotionLi>
        ))}
      </List>
    </Box>
  )
}
const initialColors = [
  { icon: GrGatsbyjs, color: "#663399" },
  { icon: GrReactjs, color: "#61DAFB" },
  { icon: GrNode, color: "#5DAF47" },
  { icon: GrMysql, color: "#E38E3E" },
  { icon: DiMongodb, color: "#299F3A" },
  { icon: FaGitAlt, color: "#EC4D28" },
  { icon: DiDjango, color: "#092D1F" },
  { icon: DiJavascript1, color: "#E9D54D" },
]
export default IconAnimation
