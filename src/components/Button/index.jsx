import { Container } from "./style";

export function Button({ title, $background_color, ...rest }) {
  return (
    <Container $background_color={ $background_color } {...rest}>
      { title }
    </Container>
  )
}