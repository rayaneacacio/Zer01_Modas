import { Container } from "./style";

export function Input({ title, placeholder, id, className, ...rest }) {
  return (
    <Container id={ id } className={ className }>
      {
        title &&
        <h3> { title } </h3>
      }
      <input type="text" placeholder={ placeholder } {...rest} />
    </Container>
  )
}