import { useNavigate } from "react-router-dom"

import { Button } from "../components/Button";

export default function NotFound404() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate("/catalog");
  }

  return (
    <>
      <Button onClick={ navigateBack }> voltar </Button>
      <h1>404 NOT FOUND</h1>
    </>
  )
}