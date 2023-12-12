import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { createErrorMessage, removeErrorMessage } from "../../scripts/messages-inputs";
import { createNotification } from "../../scripts/notifications";

import { TbBoxSeam } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCreditCard } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { Orders } from "../../components/Orders";
import { Cupons } from "../../components/Cupons";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";
import { InputBox } from "../../components/InputBox";
import { MyCards } from "../../components/MyCards";

export function Profile() {
  const { isAdmin, userData, updateUser } = useAuth();
  const route = useLocation();

  const [ email, setEmail ] = useState("");
  const [ oldPassword, setOldPassword ] = useState("");
  const [ newPassword, setNewPassword ] = useState("");

  function allDivsDisplayNone() {
    Array.from(document.querySelectorAll(".mainChild")).map(div => div.style.display = "none");
  }

  function handleNavigateOrders() {
    allDivsDisplayNone();
    document.querySelector(".divOrders").style.display = "block";
  }

  function handleNavigateCoupons() {
    allDivsDisplayNone();
    document.querySelector(".divCoupons").style.display = "block";
  }

  function handleNavigateProfile() {
    allDivsDisplayNone();
    document.querySelector(".divProfile").style.display = "flex";
  }

  function handleNavigateCards() {
    allDivsDisplayNone();
    document.querySelector(".divCards").style.display = "flex";
  }

  async function handleUpdateUser() {
    if(oldPassword == "") {
      const inputOldPassword = document.querySelectorAll(".divInput")[1];

      createErrorMessage(inputOldPassword, "por favor digite a senha");

      inputOldPassword.style.border = "none";
      inputOldPassword.querySelector("input").style.borderBottom = "1px solid red";
      document.querySelector(".divMessage").style.bottom = "-2.5rem";

    } else {
      try {
        await updateUser({ email, password: newPassword, oldPassword });
        createNotification("atualizado com sucesso :)");

      } catch(error) {
        createNotification(error.response.data.message);
      }
    }
    
  }

  useEffect(() => {
    const inputOldPassword = document.querySelectorAll(".divInputProfile")[1];
    if(inputOldPassword) {
      removeErrorMessage(inputOldPassword);
      inputOldPassword.style.border = "none";
      inputOldPassword.querySelector("input").style.borderBottom = "1px solid #B1AAAA";
    }
    
  }, [ oldPassword ]);

  useEffect(() => {
    if(userData) {
      document.querySelector(".divInputProfile input").value = userData.user.email;
      setEmail(userData.user.email);
    }

  }, [ userData ]);

  useEffect(() => {
    if(route.search == "?me") {
      handleNavigateProfile();
    }

    if(route.search == "?pedidos") {
      handleNavigateOrders();
    }

    if(route.search == "?cupons") {
      handleNavigateCoupons();
    }

    if(route.search == "?cards") {
      handleNavigateCards();
    }

  }, [ route ]);

  return (
    <Container>
      <SecondHeader />
      <Nav />
      <h3> Minha Conta </h3>

      <Main>
        <div>
          <div className="divMenu">
            <h2> Meu Cadastro </h2>
            <Button icon={ <TbBoxSeam size={ 20 } /> } title="PEDIDOS" onClick={ handleNavigateOrders } />
            <Button icon={ <IoMailOutline size={ 20 } /> } title="E-MAIL E SENHA" onClick={ handleNavigateProfile } />
            <Button icon={ <MdOutlineCreditCard size={ 20 } /> } title="CARTOES" onClick={ handleNavigateCards } />
            { isAdmin && <Button icon={ <RiCoupon3Line size={ 20 } /> } title="CUPONS" onClick={ handleNavigateCoupons } /> }
          </div>

          <div className="mainChild divProfile">
            <h2> E-mail e Senha </h2>
            <div>
              <InputBox className="divInputProfile" title="E-mail" onChange={e => setEmail(e.target.value)} />
              <InputBox className="divInputProfile" type="password" title="Senha" placeholder="Digite sua senha atual" onChange={e => setOldPassword(e.target.value)} />
              <InputBox className="divInputProfile" type="password" title="Nova Senha" placeholder="Digite uma nova senha" onChange={e => setNewPassword(e.target.value)} />
            </div>
            <Button title="SALVAR" onClick={ handleUpdateUser } />
          </div>

          <Orders className="mainChild divOrders" />

          <MyCards className="mainChild divCards" />

          <Cupons className="mainChild divCoupons" />

        </div>
        
        <Footer />
      </Main>

    </Container>
  )
}