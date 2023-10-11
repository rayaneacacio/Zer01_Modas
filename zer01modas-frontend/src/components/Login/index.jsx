import { useEffect, useState } from "react";

import { Input } from "../Input";
import { Button } from "../../components/Button";

import { Container } from "./style";

export function Login() {
  const [ account, setAccount ] = useState(true);

  function handleSignUp() {
    setAccount(false);
  }

  function handleSignIn() {
    setAccount(true);
  }

  useEffect(() => {
    //redirecionar para a parte de sign-in após fechar o modal;
    const modal = document.querySelector("dialog .buttonClose");
    if(modal) {
      modal.addEventListener("click", () => {
        setAccount(true);
      });
    }

  }, []);

  return (
    <Container>
      {
        account ?
        <div className="body-modal">
          <h3>Identificação</h3>

          <div>
            <div className="boxInput">
              <Input title="E-mail" />
              <Input title="Senha" type="password" />
            </div>
      
            <Button title="ENTRAR" />
            <Button title="criar uma conta" onClick={ handleSignUp } />
          </div>
        </div>
        :
        <div className="body-modal">
          <h3>Nova conta</h3>

          <div>
            <div className="boxInput">
              <Input title="Nome" />
              <Input title="E-mail" />
              <Input title="Senha" type="password" />
            </div>

            <Button title="CADASTRAR" />
            <Button title="voltar" onClick={ handleSignIn } />
          </div>
        </div>
      }
    </Container>
  )
}