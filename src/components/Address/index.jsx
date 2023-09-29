import { useState } from "react";

import { HiMiniPencilSquare } from "react-icons/hi2";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

import { Button } from "../Button";

import { Container } from "./style";

export function Address({ addressee, cep, street, number, complement, district, state, city, landmark }) {
  const [ chosenButton, setChosenButton ] = useState(false);

  function handleChosenAddress() {
    if(chosenButton) {
      setChosenButton(false);
      return;
    } 

    setChosenButton(true);
  }

  return (
    <Container>
      <p> <strong> { addressee } </strong> </p>

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

      <Button icon={ <HiMiniPencilSquare size={ 20 } /> } />
    </Container>
  )
}