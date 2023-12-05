import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export function PromotionalCard({ img_png, title, promotion, ...rest }) {
  const navigate = useNavigate();

  function handleNavigatePromotions() {
    navigate("/catalog?section=promoções");
  }

  return (
    <Container onClick={ handleNavigatePromotions }>
      <img src={ img_png } alt="" />
      <div>
        <h2> { promotion } OFF </h2>
      </div>
    </Container>
  )
}