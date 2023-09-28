import { SecondHeader } from "../../components/SecondHeader";
import { Nav } from "../../components/Nav";
import { SectionPayment } from "../../components/SectionPayment";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function Payment() {
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
    </Container>
  )
}