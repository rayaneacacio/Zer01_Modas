import { Container } from "./style";

export function Button({ title, $background_color, ...rest }) {
  // console.log(document.querySelector("#button"))

  return (
    <Container {...rest}>
      { title }
    </Container>
  )
}