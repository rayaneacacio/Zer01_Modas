import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useProducts } from "../../hooks/products";
import { useProductDetails } from "../../hooks/productDetails";

import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./style";

export function OutfitTag({ $detail, $modelDetail }) {
  const { lastViewedProduct } = useProducts();
  const { productDetails, modelDetails, saveProductDetailsStorage, saveModelDetailsStorage } = useProductDetails();

  const [ tag, setTag ] = useState("");
  const [ tagList, setTagList ] = $detail ? useState(productDetails) : useState(modelDetails);

  const path = useLocation().pathname;

  function handleAddTag() {
    if(tag == "") {
      return;
    }

    if($detail) {
      saveProductDetailsStorage([...tagList, tag]);
    } else if($modelDetail) {
      saveModelDetailsStorage([...tagList, tag]);
    }

    setTag("");

    if($detail) {
      document.querySelectorAll(".boxNewTag input")[0].value = "";
    } else {
      document.querySelectorAll(".boxNewTag input")[1].value = "";
    }

  }

  function handleDeleteTag(item) {
    setTagList(tagList.filter(value => value != item));
  }

  useEffect(() => {
    if($detail) {
      setTagList(productDetails);
    }

    if($modelDetail) {
      setTagList(modelDetails);
    }

  }, [ productDetails, modelDetails ]);

  useEffect(() => {
    if(path == "/edit_product") {
      if($detail && lastViewedProduct.details.length > 0) {
        const newDetails = [];
        lastViewedProduct.details.map(detail => {
          newDetails.push(detail.detail);
        });

        setTagList(newDetails);
      }
  
      if($modelDetail && lastViewedProduct.model_details.length > 0) {
        const newDetails = [];
        lastViewedProduct.model_details.map(detail => {
          newDetails.push(detail.model_detail);
        });

        setTagList(newDetails);
      }
    } else {
      setTagList([]);
    }

  }, []);

  useEffect(() => {
    if($detail) {
      saveProductDetailsStorage(tagList);
    }

    if($modelDetail) {
      saveModelDetailsStorage(tagList);
    }

  }, [ tagList ]);

  return (
    <Container>
        <div className="boxNewTag">
          <input type="text" placeholder="Adicionar" onChange={e => setTag(e.target.value) } />
          <Button icon={ <AiOutlinePlus /> } onClick={ handleAddTag } />
        </div>

      {
        tagList.length > 0 &&
        tagList.map((item, index) => (
          <div key={ index }>
            <input type="text" value={ item } readOnly />
            <Button icon={ <AiOutlineClose /> } onClick={() => handleDeleteTag(item)} />
          </div>
        )).reverse()
      }
    </Container>
  )
}