import { Container } from "./style";

export function NoveltyCard({ $main_card, gif, title, subtitle, ...rest }) {
  return (
    <Container {...rest}>
      {
        $main_card ?
        <main>
          <h2> OFERTAS NOVAS </h2>
          <p> TODOS OS DIAS </p>
          <span> ATÉ <strong> 80% OFF </strong> </span>
        </main>
        :
        <button>
          <img src={ gif } alt="" />
          <h2> { title } </h2>
          <span> { subtitle } </span>
        </button>
      }
    </Container>
  )
}