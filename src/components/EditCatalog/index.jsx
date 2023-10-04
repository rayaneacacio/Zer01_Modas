import { Input } from "../Input";
import { ChangeColor } from "../ChangeColor";
import { OutfitTag } from "../OutfitTag";

import { Container } from "./style";

export function EditCatalog({ ...rest }) {
  return (
    <Container {...rest}>
      <Input className="input-address" title="Nome" placeholder="Nome do produto" />

      <Input title="Preço" placeholder="R$ 00,00" />

      <label id="SizeLabel" htmlFor="size">
        Tamanho: 
        <select name="size" id="size">
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
      </label>

      <p>Cores</p>
      <div className="tags">
        <ChangeColor color="#FF0066" nameColor="Rosa" image="vestido-rosa.png" />
        <ChangeColor $newColor />
      </div>

      <p>Detalhes</p>
      <div className="tags">
        <OutfitTag text="Camiseta Masculina" />
        <OutfitTag $newTag />
      </div>
      
      <p>Medidas do(a) modelo</p>
      <div className="tags">
        <OutfitTag $newTag />
      </div>

      <label className="textarea" htmlFor="textarea">
        Descrição
        <textarea name="" id="textarea" cols="30" rows="10" placeholder="Breve descrição sobre o produto"></textarea>
      </label>

    </Container>
  )
}