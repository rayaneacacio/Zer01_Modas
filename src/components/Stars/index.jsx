import { useState } from "react";

import { RiStarSLine, RiStarSFill } from "react-icons/ri";

import { Container } from "./style";

export function Stars({ score, ...rest }) {
  return (
    <Container {...rest}>
      <div>
        { Array.from({ length: score }, (_, index) => (<RiStarSFill key={ index } />)) }
        { Array.from({ length: 5 - score }, ( _, index) => (<RiStarSLine key={ index } />)) }
      </div> 
      <p> (19) </p>
    </Container>
  )
}
