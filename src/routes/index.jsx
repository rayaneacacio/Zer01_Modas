import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { PayRoutes } from "./pay.routes";

import { useEffect } from "react";

export function Routes() {
  function handleHeight() {
    const body = document.querySelector("body");
    let height = null;

    if(window.innerHeight) {
      height = window.innerHeight;
    } else if(body.parentElement.clientHeight) {
      height = body.parentElement.clientHeight;
    } else if(body && body.clientHeight) {
      height = body.clientHeight;
    }

    body.style.height = `${height}px`;

  }

  useEffect(() => {
    handleHeight();
    window.addEventListener('resize', handleHeight);

    return () => {
      window.removeEventListener('resize', handleHeight);
    }

  }, []);

  return (
    <BrowserRouter>
      <AuthRoutes />
      <AppRoutes />
      <PayRoutes />
    </BrowserRouter>
  )
}