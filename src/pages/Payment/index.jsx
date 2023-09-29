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
      <Nav />

      <Main>
        <div className="payment-methods">
          <h3>Pagamento</h3>

          <SectionPayment title="pix" text="Finalize seu pagamento rapidamente com o Pix. Você pode utilizar o QR Code ou inserir o código no banco de sua preferência. O código Pix é válido por 5 horas." button="pague com Pix" />

          <SectionPayment title="cartão de débito" text="Insira os detalhes do seu cartão de débito para realizar o pagamento. As transações são seguras e criptografadas. O pagamento será processado imediatamente após a confirmação." button="pague com Débito" />

          <SectionPayment title="cartão de crédito" text="Oferecemos parcelamento de 1 a 5 vezes sem juros. Exemplo: 5x de R$15,00 sem juros." button="pague com Crédito" />

          <SectionPayment title="paypal" text="Ao clicar no botão abaixo, você será direcionado ao site do PayPal para finalizar o pagamento de forma segura." button="pague com PayPal" />

          <SectionPayment title="boleto bancário" text="Você poderá visualizar ou imprimir após a finalização do pedido. A data de vencimento é de 2 dias corridos após a conclusão do pedido. Após esta data, ele perderá a validade." button="pague com Boleto" />
        </div>

        <div className="pack">
          <h3>Pedido</h3>

          <div className="address">
            <h3>ENDEREÇO DE ENTREGA</h3>
            <Address addresse="nane" cep="62640000" street="rua Francisco Moreira" number="284" district="Centro" state="CE" city="Pentecoste"  />
            <Address addresse="nane" cep="62640000" street="rua Francisco Moreira" number="284" district="Centro" state="CE" city="Pentecoste"  />
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

        <Footer />
      </Main>

      <dialog className="modal-address">
        <div className="body-modal-address">
          <div>
            <h3>CADASTRAR NOVO ENDEREÇO</h3>
            <Button icon={ <TfiClose size={ 20 } /> } onClick={ handleCloseModal } />
          </div>

          <form>
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
          </form>
        </div>
      </dialog>
    </Container>
  )
}