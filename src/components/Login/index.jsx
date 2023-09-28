import { useEffect, useState } from "react";

import { Input } from "../../components/Input";
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
    <Container className="body">
      {
        account ?
        <div>
          <h3>Identificação</h3>

          <div>
            <Input className="boxInput" title="E-mail" />
            <Input className="boxInput" title="Senha" type="password" />
          </div>
      
          <Button title="ENTRAR" />
          <Button title="criar uma conta" onClick={ handleSignUp } />
        </div>
        :
        <div>
          <h3>Nova conta</h3>

          <div>
            <Input className="boxInput" title="Nome" />
            <Input className="boxInput" title="E-mail" />
            <Input className="boxInput" title="Senha" type="password" />
          </div>

          <Button title="CADASTRAR" />
          <Button title="voltar" onClick={ handleSignIn } />
        </div>
      }
    </Container>
  )
}