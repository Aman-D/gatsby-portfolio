import React from "react"
import { Box, Flex, Image, Grid } from "@chakra-ui/core"
const Profession = ({ children, cover, dir }) => {
  return (
    <Grid templateColumns={["1fr", "2fr 1fr"]}>
      <Box>{children}</Box>
      <Image src={cover} />
    </Grid>
  )
}

export default Profession
