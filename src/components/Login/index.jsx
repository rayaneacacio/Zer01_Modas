import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container } from "./style";

export function Login() {
  return (
    <Container>
      <div>
        <h3>Identificação</h3>
      </div>

      <div>
        <Input className="boxInput" title="E-mail" />
        <Input className="boxInput" title="Senha" type="password" />
      </div>
      
      <Button title="ENTRAR" />

      <Button title="CRIAR UMA CONTA" />

    </Container>
  )
}