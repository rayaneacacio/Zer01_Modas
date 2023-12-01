import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { TbBoxSeam } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineCreditCard } from "react-icons/md";
import { RiCoupon3Line } from "react-icons/ri";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { Button } from "../../components/Button";
import { Cupons } from "../../components/Cupons";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Profile() {
  const { isAdmin } = useAuth();
  const route = useLocation();

  function allDivsDisplayNone() {
    Array.from(document.querySelectorAll(".mainChild")).map(div => div.style.display = "none");
  }

  function handleLastRequests() {
    allDivsDisplayNone();
    document.querySelector(".divLastRequests").style.display = "block";
  }

  function handleNavigateCoupons() {
    allDivsDisplayNone();
    document.querySelector(".divCoupons").style.display = "block";
  }

  useEffect(() => {
    allDivsDisplayNone();
    document.querySelector(".divLastRequests").style.display = "block";
  }, []);

  useEffect(() => {
    if(route.search == "") {
      handleLastRequests();
    }

    if(route.search == "?cupons") {
      handleNavigateCoupons();
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
            <Button icon={ <TbBoxSeam size={ 20 } /> } title="PEDIDOS" onClick={ handleLastRequests } />
            <Button icon={ <IoPersonOutline size={ 20 } /> } title="DADOS PESSOAIS" />
            <Button icon={ <IoMailOutline size={ 20 } /> } title="E-MAIL E SENHA" />
            <Button icon={ <MdOutlineCreditCard size={ 20 } /> } title="CARTOES" />
            { isAdmin && <Button icon={ <RiCoupon3Line size={ 20 } /> } title="CUPONS" onClick={ handleNavigateCoupons } /> }
          </div>

          <div className="mainChild divLastRequests">
            <h2> Pedidos </h2>

            <div className="table">
              <div>
                <div> ID </div>
                <div> DATA </div>
                <div> PAGAMENTO </div>
                <div> VALOR TOTAL </div>
                <div> STATUS </div>
                <div></div>
              </div>
              
              <div>
                <div> 02 </div>
                <div> 17/11/2023 </div>
                <div> PIX </div>
                <div> R$ 40,00 </div>
                <div> Entregue </div>
                <div>
                  <Button title="ABRIR PEDIDO" />
                </div>
              </div>

              <div>
                <div> 02 </div>
                <div> 17/11/2023 </div>
                <div> PIX </div>
                <div> R$ 40,00 </div>
                <div> Entregue </div>
                <div>
                  <Button title="ABRIR PEDIDO" />
                </div>
              </div>

              <div>
                <div> 02 </div>
                <div> 17/11/2023 </div>
                <div> PIX </div>
                <div> R$ 40,00 </div>
                <div> Entregue </div>
                <div>
                  <Button title="ABRIR PEDIDO" />
                </div>
              </div>
            </div>
          </div>

          <Cupons className="mainChild divCoupons" style={{display: "none"}} />

        </div>
        
        <Footer />
      </Main>

    </Container>
  )
}