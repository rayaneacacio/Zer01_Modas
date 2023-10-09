import { Container } from "./style";

export function InputBox({ title, placeholder, icon, type, ...rest }) {
  return (
    <Container {...rest}>
      {
        title &&
        <h3> { title } </h3>
      }
      <input type={ type ?? "text" } placeholder={ placeholder } />
      {
        icon &&
        <img src={ icon } alt="" />
      }
    </Container>
  )
}