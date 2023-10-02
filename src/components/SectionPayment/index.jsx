import { BsChevronDown } from "react-icons/bs";

import { Button } from "../Button";

import { Container } from "./style";

export function SectionPayment({ title, text, button }) {

  function handleSelectMethod(chosenButton) {
    //para mostrar apenas a div associada ao button selecionado;
    const allButtons = document.querySelectorAll(".button-section-payment");
    const allDivsPayment = document.querySelectorAll(".make-payment");
    let chosenDiv = null;

    for(let index = 0; index < allButtons.length; index++) {
      if(chosenButton == allButtons[index]) {
        chosenDiv = allDivsPayment[index];
      }
    }

    const divsNotSelected = Array.from(allDivsPayment).filter(div => div != chosenDiv);

    divsNotSelected.forEach(div => {
      div.style.display = "none";
    });

    handleAnimation(allButtons, chosenButton, chosenDiv);
  }

  function handleAnimation(allButtons, chosenButton, chosenDiv) {
    //para adicionar animacao no botao selecionado;
    const svgButtonChosen = chosenButton.querySelector("svg");

    if(chosenDiv.style.display == "flex") {
      chosenDiv.style.display = "none";
      svgButtonChosen.style.animation = "rotate180 reverse 0.1s forwards";
    } else {
      chosenDiv.style.display = "flex";
      svgButtonChosen.style.animation = "rotate180 0.1s forwards";
    }

    for(let index = 0; index < allButtons.length; index++) {
      const svgButtonNotSelected = allButtons[index].querySelector("svg");

      if((svgButtonNotSelected != svgButtonChosen) &&
         (svgButtonNotSelected.style.animation == "0.1s ease 0s 1 normal forwards running rotate180") ) {
          //para remover a animacao dos botoes q nao foram selecionados;
          svgButtonNotSelected.style.animation = "rotate180 reverse 0.1s forwards";
      }
    }
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