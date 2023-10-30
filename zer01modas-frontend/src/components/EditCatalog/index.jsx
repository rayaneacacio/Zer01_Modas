import { useState } from "react";

import { Input } from "../Input";
import { ChangeColor } from "../ChangeColor";
import { OutfitTag } from "../OutfitTag";

import { Container } from "./style";

export function EditCatalog({ ...rest }) {
  const [ name, setName ] = useState("");
  const [ category, setCategory ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ promotion, setPromotion ] = useState("");
  const [ description, setDescription ] = useState("");

  return (
    <Container {...rest}>
      <Input title="Nome" placeholder="Nome do produto" onChange={e => setName(e.target.value)} />

      <label className="label_select" id="categoryLabel" htmlFor="categoria">
        Categoria:
        <select name="categoria" id="" onChange={e => setCategory(e.target.value)}>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="infantil">Infantil</option>
          <option value="casa">Casa</option>
          <option value="esporte">Esporte</option>
          <option value="acessorios">Acessórios</option>
        </select>
      </label>

      <Input id="inputPrice" title="Preço" type="number" placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)} />

      <Input id="inputPromotion" title="Promoçao" type="number" placeholder="00%" onChange={e => setPromotion(e.target.value)} />

      <div className="colors">
        <p>Cores</p>
        <div className="tags">
          <ChangeColor />
        </div>
      </div>

      <div className="details">
        <p>Detalhes</p>
        <div className="tags">
          <OutfitTag $detail />
        </div>
      </div>
      
      <div className="modelDetails">
        <p>Medidas do(a) modelo</p>
        <div className="tags">
          <OutfitTag $modelDetail />
        </div>
      </div>

      <label className="textarea" htmlFor="textarea">
        Descrição
        <textarea name="" id="textarea" cols="30" rows="10" placeholder="Breve descrição sobre o produto" onChange={e => setDescription(e.target.value)}></textarea>
      </label>

    </Container>
  )
}