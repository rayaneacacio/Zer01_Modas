import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { createErrorMessage, removeErrorMessage, removeAlertMessage } from "../../scripts/messages-inputs.js";
import { createNotification } from "../../scripts/notifications.js";

import { Input } from "../Input";
import { Button } from "../../components/Button";

import { Container } from "./style";

export function Login() {
  const { SignUp, SignIn } = useAuth();
  const [ account, setAccount ] = useState(true);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if(!name) {
      const nameInput = document.querySelectorAll(".registerInput")[0];
      createErrorMessage(nameInput);
    }

    if(!email) {
      const emailInput = document.querySelectorAll(".registerInput")[1];
      createErrorMessage(emailInput);
    }

    if(!password) {
      const passwordInput = document.querySelectorAll(".registerInput")[2];
      createErrorMessage(passwordInput);
    }

    if(name != "" && email != "" && password != "") {
      try {
        await SignUp({ name, email, password });
        createNotification("Usuário cadastrado com sucesso :)");

      } catch(error) {
        if(error) {
          createNotification(error.response.data.message);
        }
      }
    }
  }

  async function handleSignIn() {
    if(!email) {
      const emailInput = document.querySelectorAll(".loginInput")[0];
      createErrorMessage(emailInput);
    }

    if(!password) {
      const passwordInput = document.querySelectorAll(".loginInput")[1];
      createErrorMessage(passwordInput);
    }

    if(email != "" && password != "") {
      try {
        await SignIn({ email, password });

        if(window.innerWidth >= 1000) {
          document.querySelector(".modal-login").close();
          sessionStorage.removeItem("@zer01modas:modal");
          document.querySelector(".boxButtons .nav-menu").style.display = "none";
        } else {
          navigate(-1);
        }

      } catch(error) {
        if(error) {
          createNotification(error.response.data.message);
        }
      }
    }
  }

  function resetInputs() {
    const registerInputs = document.querySelectorAll(".registerInput");
    const loginInputs = document.querySelectorAll(".loginInput");
    const ErrorMessage = document.querySelectorAll(".divMessage");

    if(ErrorMessage.length > 0) {
      for(let div of ErrorMessage) {
        div.remove();
      }

      if(registerInputs) {
        for(let div of registerInputs) {
          div.style.borderBottom = `1px solid black`;
        }
      }

      if(loginInputs) {
        for(let div of loginInputs) {
          div.style.borderBottom = `1px solid black`;
        }
      }
    }
  }

  function navigateSignIn() {
    setAccount(true);
    resetInputs();
  }

  function navigateSignUp() {
    setAccount(false);
    resetInputs();
  }

  useEffect(() => {
    //redirecionar para a parte de sign-in após fechar o modal;
    const modal = document.querySelector("dialog .buttonClose");
    if(modal) {
      modal.addEventListener("click", () => {
        setAccount(true);
        resetInputs();
      });
    }

  }, []);

  useEffect(() => {
    const nameInput = document.querySelectorAll(".registerInput")[0];
    if(nameInput) {
      removeErrorMessage(nameInput);
    }

  }, [ name ]); 

  useEffect(() => {
    const emailInputRegister = document.querySelectorAll(".registerInput")[1];
    const emailInputLogin = document.querySelectorAll(".loginInput")[0];

    if(emailInputRegister) {
      removeErrorMessage(emailInputRegister);
    }

    if(emailInputLogin) {
      removeErrorMessage(emailInputLogin);
    }

  }, [ email ]);

  useEffect(() => {
    const passwordInputRegister = document.querySelectorAll(".registerInput")[2];
    const passwordInputLogin = document.querySelectorAll(".loginInput")[1];

    if(passwordInputRegister) {
      removeErrorMessage(passwordInputRegister);
    }

    if(passwordInputLogin) {
      removeErrorMessage(passwordInputLogin);
    }

  }, [ password ]);

  useEffect(() => {
    const registerInputs = document.querySelectorAll(".registerInput");
    const loginInputs = document.querySelectorAll(".loginInput");

    if(registerInputs.length > 0) {
      document.querySelector(".name input").value = name;
    }

    if(registerInputs.length > 0 || loginInputs.length > 0) {
      document.querySelector(".email input").value = email;
      document.querySelector(".password input").value = password;
    }

  }, [ account ]);

  useEffect(() => {
    removeAlertMessage();
  }, [ name, email, password ]);

  return (
    <Container>
      {
        account ?
        <div className="body-modal">
          <h3>Identificação</h3>

          <div className="form-modal">
            <div className="boxInput">
              <Input className="loginInput email" title="E-mail" onChange={e => setEmail(e.target.value)} />
              <Input className="loginInput password" title="Senha" type="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <Button title="ENTRAR" onClick={ handleSignIn } />
            <Button title="criar uma conta"  onClick={ navigateSignUp } />
          </div>
        </div>
        :
        <div className="body-modal">
          <h3>Nova conta</h3>

          <div className="form-modal">
            <div className="boxInput">
              <Input className="registerInput name" title="Nome" onChange={e => setName(e.target.value)} />
              <Input className="registerInput email" title="E-mail" onChange={e => setEmail(e.target.value)} />
              <Input className="registerInput password" title="Senha" type="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <Button title="CADASTRAR" onClick={ handleSignUp } />
            <Button title="voltar" onClick={ navigateSignIn } />
          </div>
        </div>
      }
    </Container>
  )
}