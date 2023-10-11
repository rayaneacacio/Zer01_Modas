import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./style";

export function OutfitTag({ text, $newTag, ...rest }) {
  return (
    <Container>
      {
        $newTag ?
        <div $newTag={ $newTag } className="boxNewTag">
          <input type="text" placeholder="Adicionar" />
          <Button icon={ <AiOutlinePlus /> } {...rest} />
        </div>
        :
        <div $newTag={ $newTag }>
          <input type="text" value={ text } readOnly />
          <Button icon={ <AiOutlineClose /> } {...rest} />
        </div>
      }
    </Container>
  )
}