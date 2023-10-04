import { BiUpload } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Button } from "../Button";

import { Container } from "./style";

export function ChangeColor({ $newColor, color, nameColor, image, ...rest }) {
  return (
    <Container>
      {
        $newColor ?
        <div>
          <input type="color" name="" id="input-color" />

          <input type="text" placeholder="cor" />

          <label htmlFor="input-image">
            <BiUpload size={ 25 } />
            Imagem
            <input type="file" name="" id="input-image" />
          </label>

          <Button icon={ <AiOutlinePlus /> } />
        </div>

        :

        <div>
          <input type="color" name="" id="input-color" value={ color } readOnly />

          <input type="text" value={ nameColor } readOnly />

          <label htmlFor="input-image">
            <BiUpload size={ 25 } />
            { image }
            <input type="file" name="" id="input-image" readOnly />
          </label>

          <Button icon={ <AiOutlineClose /> } />
        </div>
      }
    </Container>
  )
}