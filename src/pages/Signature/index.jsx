import { useNavigate } from "react-router-dom";

import { LiaAngleLeftSolid } from "react-icons/lia";

import { Button } from "../../components/Button";
import { Login } from "../../components/Login";

import { Container } from "./style";

export function Signature() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1);
  }

  return (
    <Container>
      <div>
        <Button icon={ <LiaAngleLeftSolid size={ 20 } /> } onClick={ navigateBack } />
        <Login />
      </div>
    </Container>
  )
}