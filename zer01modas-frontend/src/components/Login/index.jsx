import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";
import { Button } from "../../components/Button";

import { Container } from "./style";

export function Login() {
  const { SignUp, SignIn } = useAuth();
  const [ account, setAccount ] = useState(true);
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

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
      let registerError = null;

      try {
        await SignUp({ name, email, password });
        createAlert("Usuário cadastrado com sucesso");

      } catch(error) {
        if(error) {
          registerError = error.response.data.message;
          const emailInput = document.querySelectorAll(".registerInput")[1];
          createErrorMessage(emailInput, registerError);

        } else {
          createAlert();
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
        document.querySelector(".modal-login").close();
        sessionStorage.removeItem("@zer01modas:modal");

      } catch(error) {
        if(error) {
          createAlert(error.response.data.message);
        } else {
          createAlert();
        }
      }
    }
  }

  function createErrorMessage(input, error) {
    //cria mensagens de erro referente aos INPUTS;
    const ErrorMessage = document.createElement("div");
    ErrorMessage.classList.add("divMessage");
    ErrorMessage.innerHTML = error ? error : "Por favor preencha todos os campos";
    ErrorMessage.style.opacity = 0; 
    ErrorMessage.style.transform = "translateY(-1rem)";
    ErrorMessage.style.animation = "ErrorMessageAnimation 0.1s forwards";
    ErrorMessage.style.color = "red";
    ErrorMessage.style.fontSize = "1.6rem";

    if(input) {
      input.style.borderBottom = `1px solid red`;
      if(!input.querySelector(".divMessage")) {
        input.appendChild(ErrorMessage);
      }
    }
    
    return ErrorMessage;
  }

  function createAlert(error) {
    //cria mensagens referentes ao login/cadastro;
    const ErrorMessage = createErrorMessage();
    ErrorMessage.innerHTML = error ? error : "Nao foi posível cadastrar";
    ErrorMessage.style.position = "absolute";
    ErrorMessage.style.top = window.innerWidth >= 1000 ? "15%" : "1%";
    ErrorMessage.style.width = "100%";
    ErrorMessage.style.textAlign = "center";
    ErrorMessage.style.animation = "ErrorMessageAnimation 0s forwards";

    const form = document.querySelector(".form-modal");
    if(!form.querySelector(".divMessage")) {
      form.insertBefore(ErrorMessage, form.firstChild);
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

  function removeErrorMessage(input) {
    const error = input.querySelector(".divMessage");
    const form = document.querySelector(".form-modal");
    const alert = form.querySelector(".divMessage");

    input.style.borderBottom = `1px solid black`;
    if(error) {
      error.remove();
    }

    if(alert) {
      alert.remove();
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