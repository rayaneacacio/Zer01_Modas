import { Container } from "./style";

export function ShowOutfit({ image, title, price, promotion, ...rest }) {
  return (
    <Container $promotion={ promotion } {...rest}>    
      <img src={ image } alt="" />

      <div>
        {
          promotion &&
          <h2 className="promotion"> { promotion } </h2>
        }
        <h2 className="price"> { price } </h2>
      </div>

      <h2> { title } </h2>
    </Container>
  )
}