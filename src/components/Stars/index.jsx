import { useState } from "react";

import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import { Container } from "./style";

export function Stars({ score, ...rest }) {
  return (
    <Container {...rest}>
        { Array.from({ length: score }, (_, index) => (<RiStarSFill key={ index } />)) }
        { Array.from({ length: 5 - score }, ( _, index) => (<RiStarSLine key={ index } />)) }
    </Container>
  )
}