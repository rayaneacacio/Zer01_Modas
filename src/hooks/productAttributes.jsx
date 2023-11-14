import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const productAttributesContext = createContext({});

function ProductAttributesProvider({ children }) {
  //sections == array de atributos de um produto ([images, colors e sizes]);
  const [ sectionsList, setSectionsList ] = useState([]); //lista de sections
  const [ removeSectionsList, setRemoveSectionsList ] = useState([]); //sections a ser removidas;

  function saveSectionsStorage(sections) {
    setSectionsList(sections);
  }

  function setRemoveSectionsStorage(removeSections) {
    setRemoveSectionsList([...removeSectionsList, removeSections]);
  }

  async function AddAttributes(product_id) {
    //criar images, sizes e colors no banco de dados;
    try {
      sectionsList.map(async (section) => {
        const response = await api.post("/products_colors", { product_id, color: section.colors });
        const color_id = response.data;
        await uploadImgs(product_id, color_id, section.colors.hex, section.images);
        await postSizes(product_id, color_id, section.sizes);
      });
      
    } catch(error) {
      console.error(error);
    }
  }

  async function uploadImgs(product_id, color_id, color_hex, images) {
    //insert imgs in database;
    const fileUploadForm = new FormData();
    for(const img of images) {
      fileUploadForm.append("images", img);
    }
    
    await api.post(`/products_images?product_id=${ product_id }&color_id=${ color_id }&color_hex=${ color_hex.replace("#", "") }`, fileUploadForm);
  }

  async function postSizes(product_id, color_id, sizes) {
    //insert sizes in database;
    await api.post("/products_sizes", { product_id, color_id, sizes });
  }

  async function allColorsOfProduct(product_id) {
    //buscar todas as corres de um produto
    try {
      const response = await api.get(`/products_colors/index_colors?product_id=${ product_id }`);
      return response.data;

    } catch(error) {
      if(error) {
        console.log(error);
      } else {
        console.log("cores nao encontradas");
      }
    }
  }

  async function deleteAllImgs(product_id) {
    //apagar todas as imagens de um produto do diskStorage;
    try {
      await api.post("/products_images/delete", { product_id });

    } catch(error) {
      if(error) {
        console.error(error);
      } else {
        console.log("erro ao deletar imagens");
      }
    }
  }

  async function deleteImgsByColorHex(product_id, color_hex) {
    //apagar imagens do diskStorage;
    try {
      await api.post("/products_images/delete", { product_id, color_hex });
    
    } catch(error) {
      if(error) {
        console.error(error);
      } else {
        console.log("erro ao deletar imagens");
      }
    }
  }

  async function updateColors(product) {
    try {
      //sections == array de atributos de um produto ([images, colors e sizes]);
      const newSections = []; //novas sections a ser adicionadas;
      const removeColors = []; //colors a ser removidas;

      removeSectionsList.map(section => {
        removeColors.push(section.colors);
      });

      sectionsList.forEach(item => {
        if(!product.colors.some(color => color.hex === item.colors.hex)) {
          newSections.push(item);
        }
      });

      if(removeColors.length > 0) {
        removeColors.map(async(color) => {
          await deleteImgsByColorHex(product.id, color.hex);
        });

        await api.post("/products_colors/delete", { product_id: product.id, colors: removeColors });
      };

      if(newSections.length > 0) {
        newSections.map(async(section) => {
          const response = await api.post("/products_colors", { product_id: product.id, color: section.colors });
          const color_id = response.data;
          await uploadImgs(product.id, color_id, section.colors.hex, section.images);
          await postSizes(product.id, color_id, section.sizes);
        });
      }
      
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <productAttributesContext.Provider value={{ sectionsList, saveSectionsStorage, AddAttributes, allColorsOfProduct, deleteAllImgs, deleteImgsByColorHex, updateColors, setRemoveSectionsStorage }}>
      { children }
    </productAttributesContext.Provider>
  )
}

function useProductAttributes() {
  const context = useContext(productAttributesContext);
  return context;
}

export { ProductAttributesProvider, useProductAttributes };