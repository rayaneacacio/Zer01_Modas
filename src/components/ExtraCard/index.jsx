import { Container } from "./style";

export function ExtraCard({ image, title }) {
  return (
    <Container>
      <img src={ image } alt="" />
      <h2> { title } </h2>
    </Container>
  )
}