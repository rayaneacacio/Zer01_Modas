import { BsChevronDown } from "react-icons/bs";

import { Button } from "../Button";

import { Container } from "./style";

export function SectionPayment({ title, text, button }) {

  function handleSelectMethod(chosenButton) {
    //para mostrar apenas a div associada ao button selecionado;
    const allDivsPayment = document.querySelectorAll(".make-payment");
    let chosenDiv = null;
  
    const allButtons = document.querySelectorAll(".button-section-payment");
    for(let index = 0; index < allButtons.length; index++) {
      if(chosenButton == allButtons[index]) {
        chosenDiv = allDivsPayment[index];
      }
    }

    const svg = chosenButton.querySelector("svg");
    if(chosenDiv.style.display == "flex") {
      chosenDiv.style.display = "none";
      svg.style.animation = "rotate180 reverse 0.3s forwards";
    } else {
      chosenDiv.style.display = "flex";
      svg.style.animation = "rotate180 0.3s forwards";
    }

    const otherDivs = Array.from(allDivsPayment).filter(div => div != chosenDiv);
    otherDivs.forEach(div => {
      div.style.display = "none";
    });
  }

  return (
    <Container>
      <button className="button-section-payment" onClick={(event) => handleSelectMethod(event.target) }>
        { title }
        <BsChevronDown />
      </button>

      <div className="make-payment">
        <p>{ text }</p>
        <Button title={ button } />
      </div>
    </Container>
  )
}