import { Stars } from "../Stars";

import { Container } from "./style";

export function Comment({ title, score, review, user }) {
  return (
    <Container>
      <h2 className="title"> { title } </h2>
      <Stars score={ score } />
      <p> { review } </p>
      <h2> { user } </h2>
    </Container>
  )
}