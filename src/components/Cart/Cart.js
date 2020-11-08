import React, { useEffect } from 'react';
import useAppState from '../../appState';

import CartItem from './CartItem';
import {
  Wrapper,
  Overlay,
  Content,
  Back,
  Title,
  Header,
  Select,
  CartItemDisplay,
  SubTotalRow,
  SubTotalLabel,
  SubTotalPrice,
  CheckoutButton,
} from './Elements';

const Cart = () => {
  const { cartIsOpen, cart, closeCart, subTotal } = useAppState();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = cartIsOpen ? 'hidden' : 'scroll';
  }, [cartIsOpen]);

  console.log('cartIs open', cartIsOpen);

  if (!cartIsOpen) {
    return null;
  }

  return (
    <Wrapper>
      <Overlay onClick={closeCart} />
      <Content>
        <Header>
          <Back onClick={closeCart} />
          <Title>Your cart</Title>
        </Header>
        <Select>
          <option>USD</option>
        </Select>
        <CartItemDisplay>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              quantity={item.quantity}
              title={item.title}
              price={item.price}
              id={item.id}
              img={item.image_url}
            />
          ))}
        </CartItemDisplay>
        <SubTotalRow>
          <SubTotalLabel>Subtotal</SubTotalLabel>
          <SubTotalPrice>${subTotal}</SubTotalPrice>
        </SubTotalRow>
        <CheckoutButton>Proceed To Checkout</CheckoutButton>
      </Content>
    </Wrapper>
  );
};

export default Cart;
