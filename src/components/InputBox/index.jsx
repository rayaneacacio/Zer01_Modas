import { useEffect } from "react";
import { resizeLayout } from "../../scripts/resize-layout";

import { Container } from "./style";

export function InputBox({ title, placeholder, icon, type, ...rest }) {
  useEffect(() => {
    //capturar o valor da altura do layout sempre q a window for redimensionada;
    resizeLayout();

    window.addEventListener("resize", resizeLayout);

    return () => {
      window.removeEventListener("resize", resizeLayout);
    }

  }, []);

  return (
    <Container {...rest}>
      {
        title &&
        <h3> { title } </h3>
      }
      <input type={ type ?? "text" } placeholder={ placeholder } />
      {
        icon &&
        <img src={ icon } alt="" />
      }
    </Container>
  )
}