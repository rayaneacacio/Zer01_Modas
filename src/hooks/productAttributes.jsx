import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const productAttributesContext = createContext({});

function ProductAttributesProvider({ children }) {
  const [ sectionsList, setSectionsList ] = useState([]);

  function saveSectionsStorage(sections) {
    setSectionsList(sections);
  }

  async function AddAttributes(product_id) {
    try {
      sectionsList.map(async (section) => {
        const response = await api.post("/products_colors", { product_id, color: section.colors });
        const color_id = response.data;
        uploadImgs(product_id, color_id, section.images);
        postSizes(product_id, color_id, section.sizes);
      });
      
    } catch(error) {
      console.error(error);
    }
  }

  async function uploadImgs(product_id, color_id, images) {
    const fileUploadForm = new FormData();
    for(const img of images) {
      fileUploadForm.append("images", img);
    }
    
    await api.post(`/products_images?product_id=${ product_id }&color_id=${ color_id }`, fileUploadForm);
  }

  async function postSizes(product_id, color_id, sizes) {
    await api.post("/products_sizes", { product_id, color_id, sizes });
  }

  return (
    <productAttributesContext.Provider value={{ sectionsList, saveSectionsStorage, AddAttributes }}>
      { children }
    </productAttributesContext.Provider>
  )
}

function useProductAttributes() {
  const context = useContext(productAttributesContext);
  return context;
}

export { ProductAttributesProvider, useProductAttributes };