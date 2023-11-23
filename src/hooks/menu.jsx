import { createContext, useContext} from "react";

export const MenuContext = createContext({});

function MenuProvider({ children }) {

  function openMenuDesktop() {
    const menu = document.querySelector(".boxButtons .nav-menu");
    menu.style.display = "flex";
  }

  function closenMenuDesktop() {
    const menu = document.querySelector(".boxButtons .nav-menu");

    if(!document.querySelector(".modal-login").open && !document.querySelector(".confirmationModal")) {
      //fechar menu se os modais de login e disconnect estiverem fechados;
      menu.style.display = "none";
    }
  }

  return (
    <MenuContext.Provider value={{ openMenuDesktop, closenMenuDesktop }}>
      { children }
    </MenuContext.Provider>
  )
}

function useMenu() {
  const context = useContext(MenuContext);
  return context;
}

export { MenuProvider, useMenu };