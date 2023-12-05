import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AddressesContext = createContext({});

function AddressesProvider({ children }) {
  const [ allAddresses, setAllAddresses ] = useState([]); //todos os enderecos cadastrados pelo usuário;
  const [ chosenAddress, setChosenAddress ] = useState(""); //endereco escolhido ao fazer a compra;

  async function createAddress({ destinatario, cep, rua, numeroCasa, complemento, bairro, cidade, estado, pontoDeReferencia }) {
    try {
      await api.post("/address/", { destinatário: destinatario, cep, rua, numero: numeroCasa, complemento, bairro, cidade, estado, ponto_de_referencia: pontoDeReferencia } );

      await findAllAddresses();

    } catch(error) {
      console.log(error);
    }
  }

  async function findCep(cep) {
    try {
      const response = await api.get(`/address/show?cep=${ cep }`);

      return response;

    } catch(error) {
      console.log(error);
    }
  }

  async function findAllAddresses() {
    try {
      const response = await api.get("/address/index");

      setAllAddresses(response.data);
      return response.data;

    } catch(error) {
      console.log(error);
    }
  }

  async function deleteAddress(id) {
    try {
      await api.delete(`/address/delete?id=${ id }`);

      await findAllAddresses();

    } catch(error) {
      console.log(error);
    }
  }

  async function calculateFrete(address) {
    try {
      const response = await api.get(`/address/show_frete?cep=${ address.cep }`);

      console.log(response.data);
      return response.data;
      
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <AddressesContext.Provider value={{ allAddresses, createAddress, findCep, findAllAddresses, deleteAddress, chosenAddress, setChosenAddress, calculateFrete }}>
      { children }
    </AddressesContext.Provider>
  )
}

function useAddresses() {
  const context = useContext(AddressesContext);
  return context;
}

export { AddressesProvider, useAddresses };