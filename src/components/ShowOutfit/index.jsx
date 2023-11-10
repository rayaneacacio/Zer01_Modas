import { Container } from "./style";

export function ShowOutfit({ image, title, price, promotion, ...rest }) {
  return (
    <Container $promotion={ promotion } {...rest}>    
      <img src={ image } alt="" />

      <div>
        {
          promotion &&
          <h2 className="promotion"> R$ { promotion } </h2>
        }
        <h2 className="price"> R$ { price } </h2>
      </div>

      <h2> { title } </h2>
    </Container>
  )
}