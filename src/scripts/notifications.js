function style() {
  const modal = document.createElement("dialog");
  const div = document.createElement("div");

  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.position = "fixed";
  modal.style.top = 0;
  modal.style.zIndex = 2;
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";

  div.style.background = "white";
  div.style.padding = "5rem 5rem 3rem";
  div.style.borderRadius = "5px";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.gap = "3rem";
  div.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
  div.style.opacity = 0;
  div.style.transform = "translateY(1rem)";
  div.style.animation = "toTop 0.3s forwards";

  if(window.innerWidth <= 500) {
    div.style.width = "70%";
    div.style.padding = "5rem 0 3rem";
  }

  modal.appendChild(div);
  document.querySelector("#root").appendChild(modal);

  return { modal, div };
}

function createNotification(message) {
  const { div, modal } = style();

  div.innerHTML = `
    <h1>${ message }</h1>
    <button> OK </button>
  `;

  const button = div.querySelector("button");
  button.style.fontSize = "1.8rem";
  button.style.color = "#A332A5";
  button.style.width = "20%";
  button.style.borderRadius = "3px";

  button.addEventListener("click", () => {
    modal.remove();
  });
}

function createConfirmationMessage(message) {
  const { div, modal } = style();
  modal.classList.add("confirmationModal");
  
  div.innerHTML = `
    <h1>${ message }</h1>
    <div>
      <button>CONFIRMAR</button>
      <button>CANCELAR</button>    
    </div>
  `;
  div.style.textAlign = "center";
  
  const boxButtons = div.querySelector("div");
  const buttons = div.querySelectorAll("button");
  const buttonConfirm = div.querySelector("button:first-of-type");
  const buttonClose = div.querySelector("button:last-of-type");

  boxButtons.style.display = "flex";
  boxButtons.style.gap = "2rem"

  Array.from(buttons).map(btn => {
    btn.style.background = "#4D4D4D";
    btn.style.fontSize = "1.5rem";
    btn.style.padding = "0.7rem 1.5rem";
    btn.style.borderRadius = "3px";
  });

  buttonClose.style.background = "#A332A5";
  buttonClose.addEventListener("click", () => {
    modal.remove();
  });

  return buttonConfirm;
}

export { createNotification, createConfirmationMessage };