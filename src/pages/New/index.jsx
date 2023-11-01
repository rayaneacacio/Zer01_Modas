import { createErrorMessage } from "../../scripts/messages-inputs";

import { SecondHeader } from "../../components/SecondHeader";
import { EditCatalog } from "../../components/EditCatalog";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Container, Main } from "./style";

export function New() {

  async function handleNewProduct() {
    verifyValues();
  }

  function verifyValues() {
    const divName = document.querySelector("#inputName");
    const divPrice = document.querySelector("#inputPrice");
    const divDescription = document.querySelector(".textarea");
    const formDivs = [ divName, divPrice ];

    for(let div of formDivs) {
      if(div.querySelector("input").value == "") {
        createErrorMessage(div);
      }
    }
    
    if(divDescription.querySelector("textarea").value == "") {
      createErrorMessage(divDescription);
    }
  }

  return (
    <Container>
      <SecondHeader />

      <Main>
        <h3>Novo Produto</h3>
        <EditCatalog className="form" />
        <Button title="Salvar" onClick={ handleNewProduct } />
        <Footer />
      </Main>
    </Container>
  )
}