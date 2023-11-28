import { useEffect, useState } from "react";

import { useShopping } from "../../hooks/shopping";
import { api } from "../../services/api";
import { createConfirmationMessage } from "../../scripts/notifications";

import { GoTrash } from "react-icons/go";
import { VscRemove } from "react-icons/vsc";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../../components/Button";

import { Container } from "./style";

export function CartItem({ product, ...rest }) {
  const { removeShoppingCart, updateQuantityProductInShoppingCart, setChosenProductsInCart, chosenProductsInCart } = useShopping();

  const [ isSelected, setIsSelected ] = useState(false);

  function handleSelect() {
    if(isSelected) {
      setIsSelected(false);
      const newProducts = chosenProductsInCart.filter(index => index.id != product.id);
      
      setChosenProductsInCart(newProducts);
      return;
    }

    setIsSelected(true);
    setChosenProductsInCart(prevState => { return [...prevState, product]});
  }

  function handleRemoveShoppingCart() {
    const buttonConfirm = createConfirmationMessage("Deseja excluir esse item?");

    buttonConfirm.addEventListener("click", async() => {
      await removeShoppingCart(product.product_id, product.size, product.color_name, product.color_hex)
      document.querySelector(".confirmationModal").remove();
    });
  }

  async function handleCountReduce() {
    if(product.quantity > 1) {
      await updateQuantityProductInShoppingCart(product, "decrement");
    }
  }

  async function handleCountAdd() {
    await updateQuantityProductInShoppingCart(product, "increment");
  }

  useEffect(() => { 
    //verifica se o produto foi selecionado;
    const isChosenProduct = chosenProductsInCart.filter(index => index.id == product.id);

    if(isChosenProduct.length > 0) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }

  }, [ chosenProductsInCart ]);

  return (
    <Container className="box">
      <Swiper slidesPerView={ 1.9 } spaceBetween={ 10 } >
        <SwiperSlide>
          <div className="mobile">
            <Button className="select" icon={ isSelected ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } onClick={ handleSelect } />

            <img src={ `${ api.defaults.baseURL }/files/${ product.img }` } alt="" { ...rest }/>

            <div>
              <p className="title"> { product.name } </p>
              <p> Cor: { product.color_name } </p>
              <p> Tamanho: { product.size } </p>
              <h3> { product.price } </h3>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slide2">
          <div className="divCount">
            <span>
              <button onClick={ handleCountReduce }> { <HiOutlineMinus /> } </button>
              <h3> { product.quantity } </h3>
              <button onClick={ handleCountAdd }> { <HiOutlinePlus /> } </button> 
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-button">
          <Button icon={ <GoTrash /> } onClick={ handleRemoveShoppingCart } />
        </SwiperSlide>
      </Swiper>

      <div className="desktop">
        <Button className="select" icon={ isSelected ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked /> } onClick={ handleSelect } />

        <img src={ `${ api.defaults.baseURL }/files/${ product.img }` } alt="" { ...rest } />

        <div>
          <p className="title"> { product.name } </p>
          <p> Cor: { product.color_name } </p>
          <p> Tamanho: { product.size } </p>
          <div className="divCount">
            <span>
              <h3> Quantidade </h3>
              <button onClick={ handleCountReduce }> { <HiOutlineMinus /> } </button>
              <h3> { product.quantity } </h3>
              <button onClick={ handleCountAdd }> { <HiOutlinePlus /> } </button> 
            </span>
            
            <h3> { product.price } </h3> 
          </div>
        </div>

        <Button className="remove" icon={ <VscRemove /> } onClick={ handleRemoveShoppingCart } />
      </div>

    </Container>
  )
}