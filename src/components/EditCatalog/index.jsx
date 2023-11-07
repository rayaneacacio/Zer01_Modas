import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { createErrorMessage, removeErrorMessage } from "../../scripts/messages-inputs";
import { createNotification, createConfirmationMessage } from "../../scripts/notifications";
import { useProducts } from "../../hooks/products";
import { useProductAttributes } from "../../hooks/productAttributes";

import { Input } from "../Input";
import { ChangeColor } from "../ChangeColor";
import { OutfitTag } from "../OutfitTag";
import { Button } from "../Button";

import { Container } from "./style";

export function EditCatalog({ ...rest }) {
  const { createProduct } = useProducts();
  const { AddAttributes } = useProductAttributes();

  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("Feminino");
  const [ price, setPrice ] = useState("");
  const [ promotion, setPromotion ] = useState("");
  const [ description, setDescription ] = useState("");

  const path = useLocation().pathname;

  async function handleNewProduct() {
    verifyValues();

    if(name != "" && price != "" && description != "") {
      const product_id = await createProduct({ name, category, price, promotion, description });
      await AddAttributes({ product_id });
      createNotification("Produto criado com sucesso :)");
    }
  }

  async function handleEditProduct() {
    createNotification("Produto atualizado com sucesso :)");
  }

  async function handleDeleteProduct() {
    const buttonConfirm = createConfirmationMessage("Tem certeza que deseja excluir?");
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

  useEffect(() => {
    const inputName = document.querySelector("#inputName");
    const divMessage = document.querySelector("#inputName .divMessage");

    if(divMessage) {
      removeErrorMessage(inputName);
    }

  }, [ name ]);

  useEffect(() => {
    const inputPrice = document.querySelector("#inputPrice");
    const divMessage = document.querySelector("#inputPrice .divMessage");

    if(divMessage) {
      removeErrorMessage(inputPrice);
    }

  }, [ price ]);

  useEffect(() => {
    const inputDescription = document.querySelector(".textarea");
    const divMessage = document.querySelector(".textarea .divMessage");

    if(divMessage) {
      removeErrorMessage(inputDescription);
    }

  }, [ description ]);

  return (
    <Container {...rest}>
      <Input id="inputName" title="Nome" placeholder="Nome do produto" onChange={e => setName(e.target.value)} />

      <label className="label_select" id="categoryLabel" htmlFor="categoria">
        Categoria:
        <select name="categoria" id="" defaultValue="Feminino" onChange={e => setCategory(e.target.value)}>
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Infantil">Infantil</option>
          <option value="Casa">Casa</option>
          <option value="Esporte">Esporte</option>
          <option value="Acessórios">Acessórios</option>
        </select>
      </label>

      <Input id="inputPrice" title="Preço" type="number" span="R$" placeholder="00,00" onChange={e => setPrice(e.target.value)} />

      <Input id="inputPromotion" title="Promoçao" type="number" span="%" placeholder="00" onChange={e => setPromotion(e.target.value)} />

      <div className="colors">
        <p>Cores</p>
        <div className="tags">
          <ChangeColor />
        </div>
      </div>

      <div className="details">
        <p>Detalhes</p>
        <div className="tags">
          <OutfitTag $detail />
        </div>
      </div>

      <div className="modelDetails">
        <p>Medidas do(a) modelo</p>
        <div className="tags">
          <OutfitTag $modelDetail />
        </div>
      </div>

      <label className="textarea" htmlFor="textarea">
        Descrição
        <textarea name="" id="textarea" cols="30" rows="10" placeholder="Breve descrição sobre o produto" onChange={e => setDescription(e.target.value)}></textarea>
      </label>

      {
        path == "/new" ?
        <Button title="SALVAR" onClick={ handleNewProduct } />
        :
        <div className="buttons">
          <Button title="SALVAR" onClick={ handleEditProduct } />
          <Button title="EXCLUIR" onClick={ handleDeleteProduct } />
        </div>
      }

    </Container>
  )
}