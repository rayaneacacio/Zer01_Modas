import iconSearch from "../../assets/search-icon.svg";

import { Container } from "./style";

export function InputSearch({ ...rest }) {
  return (
    <Container {...rest}>
      <input type="text" placeholder="O que vai querer hoje?" />
      <img src={ iconSearch } alt="" />
    </Container>
  )
}