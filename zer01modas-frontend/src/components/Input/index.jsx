import { Container } from "./style";

export function Input({ title, placeholder, ...rest }) {
  return (
    <Container {...rest}>
      {
        title &&
        <h3> { title } </h3>
      }
      <input type="text" placeholder={ placeholder } />
    </Container>
  )
}