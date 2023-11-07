import { Container } from "./style";

export function Input({ title, span, placeholder, id, className, ...rest }) {
  return (
    <Container id={ id } className={ className }>
      {
        title &&
        <h3> { title } </h3>
      }

      <div>
        {
          span &&
          <span> { span } </span>
        }
        <input type="text" placeholder={ placeholder } {...rest} />        
      </div>

    </Container>
  )
}