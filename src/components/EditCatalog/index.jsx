import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { createErrorMessage, removeErrorMessage } from "../../scripts/messages-inputs";
import { createNotification, createConfirmationMessage } from "../../scripts/notifications";
import { useProducts } from "../../hooks/products";
import { useProductAttributes } from "../../hooks/productAttributes";
import { useProductDetails } from "../../hooks/productDetails";

import { Input } from "../Input";
import { ChangeColor } from "../ChangeColor";
import { OutfitTag } from "../OutfitTag";
import { Button } from "../Button";

import { Container } from "./style";

export function EditCatalog({ ...rest }) {
  const { createProduct, deleteProducts, lastViewedProduct, updateProduct } = useProducts();
  const { AddAttributes, saveSectionsStorage, deleteAllImgs, updateColors } = useProductAttributes();
  const { addDetailsDatabase, saveProductDetailsStorage, saveModelDetailsStorage, updateTags } = useProductDetails();

  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("FEMININO");
  const [ price, setPrice ] = useState("");
  const [ promotion, setPromotion ] = useState("");
  const [ description, setDescription ] = useState("");

  const path = useLocation().pathname;
  const navigate = useNavigate();

  async function handleNewProduct() {
    verifyValues();

    if(name != "" && price != "" && description != "") {
      try {
        const product_id = await createProduct({ name, category, price, promotion, description });
        await AddAttributes(product_id);
        await addDetailsDatabase(product_id);

        createNotification("Produto criado com sucesso :)");
        clearPage();

      } catch(error) {
        alert(error);
      }
    }
  }

  async function handleEditProduct() {
    try {
      await updateProduct({ id: lastViewedProduct.id, name, category, price, promotion, description });
      await updateColors(lastViewedProduct);
      await updateTags(lastViewedProduct.id);

    } catch(error) {
      console.log(error);
    }

    createNotification("Produto atualizado com sucesso :)");
  }

  function handleDeleteProduct() {
    const buttonConfirm = createConfirmationMessage("Tem certeza que deseja excluir?");

    buttonConfirm.addEventListener("click", async() => {
      await deleteAllImgs(product_id);
      await deleteProducts([product_id]);
      document.querySelector(".confirmationModal").remove();
      createNotification("Produto removido ;)");
      navigate(-2);
    });
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

  function clearPage() {
    const allInputs = document.querySelectorAll("input");
    const select = document.querySelector(".label_select select");
    const textarea = document.querySelector("#textarea");

    Array.from(allInputs).map(input => {
      input.value = "";
    });

    select.value = "FEMININO";
    textarea.value = "";

    setName("");
    setCategory("FEMININO");
    setPrice("");
    setPromotion("");
    setDescription("");

    saveSectionsStorage([]);
    saveProductDetailsStorage([]);
    saveModelDetailsStorage([]);
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

  useEffect(() => {
    //definir os valores da page de Edicao;
    if(path == "/edit_product") {
      document.querySelector("#inputName input").value = lastViewedProduct.name;
      document.querySelector("#textarea").value = lastViewedProduct.description;
      document.querySelector("#categoryLabel select").value = lastViewedProduct.category;
      document.querySelector("#inputPrice input").value = (lastViewedProduct.price).replace(/[^0-9,]/g, "");

      setName(lastViewedProduct.name);
      setDescription(lastViewedProduct.description);
      setCategory(lastViewedProduct.category);
      setPrice((lastViewedProduct.price).replace(/[^0-9,]/g, ""));

      if(lastViewedProduct.promotion) {
        document.querySelector("#inputPromotion input").value = lastViewedProduct.promotion.percentage;
        setPromotion(lastViewedProduct.promotion.percentage);
      }
    }

  }, []);

  return (
    <Container {...rest}>
      <Input id="inputName" title="Nome" placeholder="Nome do produto" onChange={e => setName(e.target.value)} />

      <label className="label_select" id="categoryLabel" htmlFor="categoria">
        Categoria:
        <select name="categoria" id="" defaultValue="FEMININO" onChange={e => setCategory(e.target.value)}>
          <option value="FEMININO">Feminino</option>
          <option value="MASCULINO">Masculino</option>
          <option value="INFANTIL">Infantil</option>
          <option value="CASA">Casa</option>
          <option value="ESPORTE">Esporte</option>
          <option value="ACESSORIOS">Acessórios</option>
        </select>
      </label>

      <Input id="inputPrice" title="Preço" span="R$" placeholder="00,00" onChange={e => setPrice(e.target.value)} />

      <Input id="inputPromotion" title="Promoçao" span="%" placeholder="00" onChange={e => setPromotion(e.target.value)} />

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