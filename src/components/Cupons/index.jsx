import { useEffect, useState } from "react";

import { useShopping } from "../../hooks/shopping";
import { createErrorMessage, removeErrorMessage } from "../../scripts/messages-inputs";

import { GoPlus } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";

import { Button } from "../Button";

import { Container } from "./style";

export function Cupons({ ...rest }) {
  const { createCupom, findAllCupons, allCupons, deleteCupom } = useShopping();

  const [ newCupom, setNewCupom ] = useState({ name: "", discount: "0%" });

  async function handleCreateCupom() {
    const divInputsCoupons = document.querySelectorAll(".divInputsCoupons");

    if(newCupom.name == "") {
      createErrorMessage(divInputsCoupons[0]);
    }

    if(newCupom.discount == "0%") {
      createErrorMessage(divInputsCoupons[1]);
      return;
    }

    if(newCupom.name != "" && newCupom.discount != "0%") {
      await createCupom(newCupom);
      Array.from(divInputsCoupons).map(div => div.querySelector("input").value = "");
      setNewCupom({ name: "", discount: "0%" });
    }
  }

  async function handleRemoveCupom(name_cupom, discount_cupom) {
    await deleteCupom(name_cupom, discount_cupom);
  }

  useEffect(() => {
    (async() => {
      await findAllCupons();
    })();

  }, []);

  useEffect(() => {
    const divInputsCoupons = document.querySelectorAll(".divInputsCoupons");

    if(divInputsCoupons) {
      Array.from(divInputsCoupons).map(div => {
        removeErrorMessage(div);
        div.style.borderBottom = "none";
      });
    }

  }, [ newCupom ]);

  return (
    <Container {...rest}>
      <h2> Criar cupons </h2>

      <div>
        <div className="divInputsCoupons">
          <h2>NOME</h2>
          <input type="text" placeholder="CUPOM10" onChange={e => setNewCupom(prevState => { return {...prevState, name: e.target.value} })} /> 
        </div>

        <div className="divInputsCoupons">
          <h2>DESCONTO</h2>
          <input type="text" placeholder="100%" onChange={e => setNewCupom(prevState => { return {...prevState, discount: e.target.value} })} />
        </div>

        <Button icon={ <GoPlus size={ 25 } /> } onClick={ handleCreateCupom } />
      </div>

      <div>
      {
        allCupons.length > 0 &&
        allCupons.map((cupom, index) => (
          <div key={ index }>
            <span title={ `${ cupom.discount } de desconto` }> { cupom.cupom } </span>
            <Button icon={ <MdOutlineClose size={ 20 } /> } onClick={() => handleRemoveCupom(cupom.cupom, cupom.discount) } />
          </div>
        ))
      }
      </div>
    </Container>
  )
}