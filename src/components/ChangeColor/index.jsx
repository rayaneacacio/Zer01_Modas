import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { createErrorMessage, removeErrorMessage } from "../../scripts/messages-inputs";
import { useProducts } from "../../hooks/products";
import { useProductAttributes } from "../../hooks/productAttributes";

import { BiUpload } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./style";

export function ChangeColor({ ...rest }) {
  const { lastViewedProduct } = useProducts();
  const { sectionsList, saveSectionsStorage, setRemoveSectionsStorage } = useProductAttributes();

  const [ hexColor, setHexColor ] = useState("");
  const [ nameColor, setNameColor ] = useState("");
  const [ images, setImages ] = useState([]);
  const [ sizes, setSizes ] = useState([]);
  const [ sections, setSections ] = useState(sectionsList);

  const path = useLocation().pathname;

  function handleAddSize(button, value) {
    const alreadyExists = sizes.some(size => size == value);

    if(alreadyExists) {
      setSizes(sizes.filter(size => size != value));
      button.style.background = "#d9d2d2";
      button.style.color = "black";
    } else {
      setSizes([...sizes, value]);
      button.style.background = "#A332A5";
      button.style.color = "white";
    }
  }

  async function handleNewSection() {
    if(nameColor == "" || images.length == 0 || sizes.length == 0) {
      createErrorMessage(document.querySelector(".new"));
      document.querySelector(".divMessage").style.position = "absolute";
      document.querySelector(".divMessage").style.bottom = "-1rem";
      return;
    }

    let hex = hexColor == "" ? "#030303" : hexColor;

    saveSectionsStorage([...sections, {
      colors: { name: nameColor, hex },
      images: images,
      sizes: sizes
    }]);

    clearInputNew();
  }

  function clearInputNew() {
    setHexColor("");
    setNameColor("");
    setImages([]);
    setSizes([]);

    const inputs = document.querySelectorAll(".new input");
    Array.from(inputs).map(input => input.value = "");

    const buttonsNewSize = document.querySelectorAll(".new .size button");
    Array.from(buttonsNewSize).map(button => {
      button.style.background = "#d9d2d2";
      button.style.color = "black";
    });
  }

  function handleDeleteSection(value) {
    const newSectionList = sections.filter(item => item != value);
    setSections(newSectionList);
    setRemoveSectionsStorage(value);
  }

  useEffect(() => {
    //remover mensagens de erro sempre que um state mudar;
    const divMessage = document.querySelector(".divMessage");
    if(divMessage) {
      removeErrorMessage(document.querySelector(".new"));
    }

  }, [ hexColor, nameColor, images, sizes, sections ]);

  useEffect(() => {
    //salvar na lista de sections para visualizar no html;
    setSections(sectionsList);

  }, [ sectionsList ]);

  useEffect(() => {
    //salvar sections no hook productAttributes;
    saveSectionsStorage(sections);

  }, [ sections ]);

  useEffect(() => {
    //definir os valores caso esteja na pag de edicao;
    if(path == "/edit_product") {
      const newSections = [];

      for(let color of lastViewedProduct.colors) {
        const imgs = [];
        const sizes = [];

        lastViewedProduct.images.map(img => {
          if(img.color_id == color.id) {
            imgs.push(img.image);
          }
        });

        lastViewedProduct.sizes.map(size => {
          if(size.color_id == color.id) {
            sizes.push(size.size);
          }
        });

        newSections.push({
          colors: { name: color.name, hex: color.hex },
          images: imgs,
          sizes: sizes
        });

      };

      saveSectionsStorage(newSections);
    } else {
      saveSectionsStorage([]);
    }

  }, []);

  return (
    <Container>
        <div className="new">
          <input type="color" name="" id="input-color" onChange={e => setHexColor(e.target.value) }  />

          <input type="text" placeholder="cor" onChange={e => setNameColor(e.target.value) } />

          <label htmlFor="input-newImage">
            <BiUpload size={ 25 } />
            { 
              images && images.length > 1 ? 
              `${ images.length } arquivos` 
              : images && images.length == 1 ? 
              "1 arquivo" 
              : 
              "Nenhum arquivo" 
            }
            <input type="file" name="" id="input-newImage" accept="image/*" multiple onChange={e => setImages(Array.from(e.target.files)) }  />
          </label>

          <div className="size">
            <button onClick={(e) => handleAddSize(e.target, "P") }> P </button>
            <button onClick={(e) => handleAddSize(e.target, "M") }> M </button>
            <button onClick={(e) => handleAddSize(e.target, "G") }> G </button>
            <button onClick={(e) => handleAddSize(e.target, "GG") }> GG </button>
          </div>

          <Button icon={ <AiOutlinePlus /> } onClick={ handleNewSection } />
        </div>

        {
          sections.length > 0 &&
          sections.map((item, index) => (
            <div key={ index }>
              <input type="color" name="" id="input-color" value={ item.colors.hex } disabled />
              <input type="text" value={ item.colors.name } readOnly />

              <label htmlFor="input-image">
                <BiUpload size={ 25 } />
                { item.images.length > 1 ? `${ item.images.length } arquivos` : "1 arquivo" }
                <input type="file" name="" id="input-image" accept="image/*" multiple disabled />
              </label>

              <div className="size">
                {
                  item.sizes.map((size, index) => (
                    <button key={ index } >{ size }</button>
                  ))
                }
              </div>

              <Button icon={ <AiOutlineClose /> } onClick={(e) => handleDeleteSection(item) } />             
            </div>
          )).reverse()
        }
    </Container>
  )
}