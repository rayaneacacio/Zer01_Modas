import { Container } from "./style";

export function ShowOutfit({ image, title, price, promotion }) {
  return (
    <Container $promotion={ promotion }>    
      <img src={ image } alt="" />

      <div>
        {
          promotion &&
          <h2 id="promotion"> R$ { promotion } </h2>
        }
        <h2 id="price"> R$ { price } </h2>
      </div>
      
      <h2> { title } </h2>
    </Container>
  )
}