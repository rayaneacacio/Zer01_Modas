import { useEffect, useState } from "react";

import { useAddresses } from "../../hooks/addresses";
import { createConfirmationMessage } from "../../scripts/notifications";

import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./style";

export function Address({ destinatario, cep, street, number, complement, district, state, city, landmark, address }) {
  const { deleteAddress, chosenAddress, setChosenAddress, calculateFrete } = useAddresses();
  const [ chosenButton, setChosenButton ] = useState(false);

  function handleChosenAddress() {
    if(chosenButton) {
      setChosenButton(false);
      setChosenAddress("");
      return;
    } 

    setChosenButton(true);
    setChosenAddress(address);
  }

  async function handleRemoveAddress() {
    const buttonConfirm = createConfirmationMessage("Excluir o endereço?");

    buttonConfirm.addEventListener("click", async() => {
      await deleteAddress(address.id)
      document.querySelector(".confirmationModal").remove();
    });
  }

  useEffect(() => {
    if(address == chosenAddress) {
      setChosenButton(true);
      (async() => {
        await calculateFrete(address);
      })();

    } else {
      setChosenButton(false);
    }

  }, [ chosenAddress ]);

  return (
    <Container>
      <p> <strong> { destinatario } </strong> </p>

      <Button className="button-chosen-address" icon={ chosenButton ? <MdRadioButtonChecked size={ 13 } /> : <MdRadioButtonUnchecked size={ 13 } /> } onClick={ handleChosenAddress } />

      <div onClick={ handleChosenAddress }>
        <p>{ street }, { number }</p>
        
        <p>{ district }</p>

        {
          landmark &&
          <p>{ landmark }</p>
        }

        {
          complement &&
          <p>{ complement }</p>
        }

        <p>{ city } - { state }</p>

        <p>{ cep }</p>
      </div>

      <Button icon={ <AiOutlineMinus size={ 20 } /> } onClick={ handleRemoveAddress }  />
    </Container>
  )
}