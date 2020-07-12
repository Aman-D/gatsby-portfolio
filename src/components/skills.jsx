import React from "react"
import { List, ListItem, ListIcon } from "@chakra-ui/core"

const Skills = ({ skills }) => {
  return (
    <List spacing={3}>
      {skills.map((skill, index) => (
        <ListItem key={index}>
          <ListIcon icon="check-circle" color="green.500" />
          {skill}
        </ListItem>
      ))}
    </List>
  )
}

export default Skills
