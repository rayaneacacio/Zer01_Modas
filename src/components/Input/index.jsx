import { Container } from "./style";

export function Input({ placeholder, icon, ...rest }) {
  return (
    <Container {...rest}>
      <input type="text" placeholder={ placeholder } />
      {
        icon &&
        <img src={ icon } alt="" />
      }
    </Container>
  )
}