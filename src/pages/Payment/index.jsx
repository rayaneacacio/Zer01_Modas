import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";
import { useAddresses } from "../../hooks/addresses";
import { useShopping } from "../../hooks/shopping";
import { createErrorMessage, removeErrorMessage } from "../../scripts/messages-inputs";
import { createNotification } from "../../scripts/notifications";

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
  const { userData } = useAuth();
  const { createAddress, findCep, findAllAddresses, allAddresses } = useAddresses();
  const { chosenProductsInCart, buyPrice } = useShopping();

  const [ destinatario, setDestinatario ] = useState("");
  const [ cep, setCep ] = useState(0);
  const [ rua, setRua ] = useState("");
  const [ numeroCasa, setNumeroCasa ] = useState(0);
  const [ complemento, setComplemento ] = useState("");
  const [ bairro, setBairro ] = useState("");
  const [ cidade, setCidade ] = useState("");
  const [ estado, setEstado ] = useState("");
  const [ pontoDeReferencia, setPontoDeReferencia ] = useState("");

  function handleOpenModalAddress() {
    document.querySelector(".modal-address").show();
  }

  function handleCloseModalAddress() {
    document.querySelector(".modal-address").close();
  }

  async function handleSaveNewAddress(event) {
    event.preventDefault();

    if(destinatario == "") {
      createErrorMessage(document.querySelector(".input_destinatario"));
    }

    if(cep == 0) {
      createErrorMessage(document.querySelector(".input_cep"));
    }

    if(rua == "") {
      createErrorMessage(document.querySelector(".input_rua"));
    }

    if(numeroCasa == 0) {
      createErrorMessage(document.querySelector(".input_numero"));
    }

    if(destinatario != "" && cep != 0 && rua != "" && numeroCasa != 0) {
      await createAddress({ destinatario, cep, rua, numeroCasa, complemento, bairro, cidade, estado, pontoDeReferencia });
      createNotification("Endereço salvo :)");
      handleCloseModalAddress();
    }

  }

  useEffect(() => {
    Array.from(document.querySelectorAll(".input_address")).map(element => {
      removeErrorMessage(element);
    });
    
  }, [ destinatario, cep, rua, numeroCasa ]);

  useEffect(() => {
    if(cep.toString().length == 8) {
      (async() => {
        const response = await findCep(cep);

        document.querySelector(".input_rua input").value = response.data.logradouro;
        document.querySelector(".input_bairro input").value = response.data.bairro;
        document.querySelector(".input_cidade input").value = response.data.localidade;
        document.querySelector(".input_estado input").value = response.data.uf;

        setRua(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setEstado(response.data.uf);
      })();
    }
    
  }, [ cep ]);

  useEffect(() => {
    if(userData) {
      (async() => {
        await findAllAddresses();
      })();
    }

  }, [ userData ]);

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
            <div className="boxAddresses">
              {
                allAddresses.length > 0 &&
                allAddresses.map((address, index) => (
                  <Address key={ index } destinatario={ address.destinatário } cep={ address.cep } street={ address.rua } number={ address.numero } district={ address.bairro } state={ address.estado } city={ address.cidade } address={ address }  />
                ))
              }
            </div>
            
            <Button title="CADASTRAR NOVO ENDEREÇO" onClick={ handleOpenModalAddress } />
          </div>

          <div className="items">
            <h3>ITENS DO PEDIDO</h3>

            {
              chosenProductsInCart.length > 0 &&
              chosenProductsInCart.map((product, index) => (
                <div key={ index }>
                  <p>{ product.name } ({ product.color_name })</p>
                  <p>{ product.quantity }</p>
                  <p>{ product.price }</p>
                </div>
              ))
            }
          </div>

          <div className="total">
            <div>
              <p id="frete">FRETE GRÁTIS </p>
            </div>
            <div>
              <p>TOTAL</p>
              <p>{ buyPrice }</p>
            </div>
          </div>
        </div>

        <Footer />
      </Main>

      <dialog className="modal-address">
        <div className="body-modal-address">
          <div>
            <h3>CADASTRAR NOVO ENDEREÇO</h3>
            <Button icon={ <TfiClose size={ 20 } /> } onClick={ handleCloseModalAddress } />
          </div>

          <form>
            <Input title="Nome do destinatario" placeholder="Digite aqui :)" className="input_address input_destinatario" onChange={e => setDestinatario(e.target.value)} />
            <Input title="Seu cep" placeholder="Digite aqui :)" type="number" className="input_address input_cep" onChange={e => setCep(e.target.value)} />
            <Input title="Nome da rua" placeholder="Digite aqui :)" className="input_address input_rua" onChange={e => setRua(e.target.value)} />
            <Input title="Número" placeholder="Digite aqui :)" className="input_address input_numero" onChange={e => setNumeroCasa(e.target.value)} />
            <Input title="Complemento" placeholder="Digite aqui :) (opcional)" onChange={e => setComplemento(e.target.value)} />
            <Input title="Bairro" placeholder="Digite aqui :)" className="input_address input_bairro" onChange={e => setBairro(e.target.value)} />
            <Input title="Cidade" placeholder="Digite aqui :)" className="input_address input_cidade" onChange={e => setCidade(e.target.value)} readOnly />
            <Input title="Estado" placeholder="Digite aqui :)" className="input_address input_estado" onChange={e => setEstado(e.target.value)} readOnly />
            <Input title="Ponto de refêrencia" placeholder="Digite aqui :) (opcional)" onChange={e => setPontoDeReferencia(e.target.value)} />

            <Button title="SALVAR" onClick={event => handleSaveNewAddress(event) } />
          </form>
        </div>
      </dialog>
    </Container>
  )
}