import { IoIosArrowUp } from "react-icons/io";

import { Button } from "../Button";

import { Container } from "./style";

export function SectionPayment({ title, text, button }) {

  function handleSelectMethod(selectingButton) {
    //para mostrar apenas a div associada ao button selecionado;
    const allDivsPayment = document.querySelectorAll(".make-payment");
    let selectingDiv = null;
  
    const allButtons = document.querySelectorAll(".button-section-payment");
    for(let index = 0; index < allButtons.length; index++) {
      if(selectingButton == allButtons[index]) {
        selectingDiv = allDivsPayment[index];
      }
    }

    if(selectingDiv.style.display == "flex") {
      selectingDiv.style.display = "none";
    } else {
      selectingDiv.style.display = "flex";
    }

    const otherDivs = Array.from(allDivsPayment).filter(div => div != selectingDiv);
    otherDivs.forEach(div => {
      div.style.display = "none";
    });

  }

  return (
    <Container>
      <button className="button-section-payment" onClick={(event) => handleSelectMethod(event.target) }>
        { title }
        <IoIosArrowUp />
      </button>

      <div className="make-payment">
        <p>{ text }</p>
        <Button title={ button } />
      </div>
    </Container>
  )
}