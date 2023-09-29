import { TfiClose } from "react-icons/tfi";

import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { SectionPayment } from "../../components/SectionPayment";
import { Address } from "../../components/Address";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Payment() {
  function handleNewAddress() {
    document.querySelector(".modal-address").show();
  }

  function handleCloseModal() {
    document.querySelector(".modal-address").close();
  }

  return (
    <Container>
      <SecondHeader />

      <Main>
        <div className="payment-methods">
          <h3>Pagamento</h3>

          <SectionPayment title="pix" text="Você poderá finalizar seu pagamento por meio do QR Code ou código no banco que preferir. Válido por 5 horas." button="" />

          <SectionPayment title="cartão" />

          <SectionPayment title="paypal" text="Após clicar no botão abaixo, você será direcionado ao PayPal para realizar o pagamento." button="pague com PayPal" />

          <SectionPayment title="boleto bancário" text="Você poderá visualizar ou imprimir após a finalização do pedido. A data de vencimento é de 2 dias corridos após a conclusão do pedido. Após esta data, ele perderá a validade." button="concluir com Boleto" />
        </div>

        <div>
          <h3>Pedido</h3>

          <div className="address">
            <h3>ENDEREÇO DE ENTREGA</h3>
            <Address addressee="nane" cep="62640000" street="rua Francisco Moreira" number="284" district="Centro" state="CE" city="Pentecoste"  />
            <Address addressee="nane" cep="62640000" street="rua Francisco Moreira" number="284" district="Centro" state="CE" city="Pentecoste"  />
            <Button title="CADASTRAR NOVO ENDEREÇO" onClick={ handleNewAddress } />
          </div>

          <div className="items">
            <h3>ITENS DO PEDIDO</h3>

            <div>
              <p>Camisa Polo John John Frisos Masculina</p>
              <p>1</p>
              <p>R$ 59,99</p>
            </div>

            <div>
              <p>Hang Loose</p>
              <p>1</p>
              <p>R$ 59,99</p>
            </div>
          </div>

          <div className="total">
            <div>
              <p id="frete">FRETE GRÁTIS </p>
            </div>
            <div>
              <p>TOTAL</p>
              <p>R$ 269,97</p>
            </div>
          </div>
        </div>

        <dialog className="modal-address">
          <h3>CADASTRAR NOVO ENDEREÇO</h3>
          <Button icon={ <TfiClose size={ 20 } /> } onClick={ handleCloseModal } />

          <div>
            <Input className="input-address" title="Nome do destinatario" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Seu cep" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Nome da rua" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Número" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Complemento" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Bairro" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Estado" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Cidade" placeholder="Digite aqui :)" />
            <Input className="input-address" title="Ponto de refêrencia" placeholder="Digite aqui :)" />

            <Button title="SALVAR" />
          </div>
        </dialog>

        <Footer />
      </Main>
    </Container>
  )
}