import { Container } from "./style";

export function Input({ title, icon, ...rest }) {
  return (
    <Container {...rest}>
      <input type="text" placeholder={ title } />
      {
        icon &&
        <img src={ icon } alt="" />
      }
    </Container>
  )
}