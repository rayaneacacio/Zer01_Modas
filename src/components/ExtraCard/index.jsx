import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export function ExtraCard({ image, title }) {
  const navigate = useNavigate();

  function handleNavigateCatalog() {
    navigate(`/catalog?section=${ title.toLowerCase() }`);
  }

  return (
    <Container onClick={ handleNavigateCatalog }>
      <img src={ image } alt="" />
      <h2> { title } </h2>
    </Container>
  )
}