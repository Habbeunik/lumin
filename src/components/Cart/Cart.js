import { gql, useQuery } from '@apollo/client';
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

const CURRENCY_QUERY = gql`
  {
    currency
  }
`;

const Cart = () => {
  const { data = {} } = useQuery(CURRENCY_QUERY);
  const currencies = data.currency || [];
  const {
    cartIsOpen,
    cart,
    closeCart,
    subTotal,
    currencySymbol,
    currency,
    setCurrency,
  } = useAppState();

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = cartIsOpen ? 'hidden' : 'scroll';
  }, [cartIsOpen]);

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
        <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
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
          <SubTotalPrice>
            {currencySymbol}
            {subTotal}
          </SubTotalPrice>
        </SubTotalRow>
        <CheckoutButton>Proceed To Checkout</CheckoutButton>
      </Content>
    </Wrapper>
  );
};

export default Cart;
