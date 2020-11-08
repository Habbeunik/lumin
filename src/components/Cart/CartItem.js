import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import useAppState from '../../appState';

import {
  CartItemWrap,
  CartItemTitle,
  CartItemCancel,
  CartItemImg,
  QuantityManager,
  CartItemBottomRow,
  PriceWrap,
  Price,
} from './Elements';

const CartItem = ({ quantity, title, img, price, id }) => {
  const { addToCart, removeFromCart, currencySymbol } = useAppState();

  return (
    <CartItemWrap>
      <CartItemTitle>{title}</CartItemTitle>
      <CartItemCancel onClick={() => removeFromCart(id, -quantity)}>
        x
      </CartItemCancel>
      <CartItemImg src={img} />
      <CartItemBottomRow>
        <QuantityManager
          quantity={quantity}
          onIncrease={() => addToCart(id)}
          onDecrease={() => removeFromCart(id)}
        />
        <PriceWrap>
          <Price>
            {currencySymbol}
            {price * quantity}
          </Price>
        </PriceWrap>
      </CartItemBottomRow>
    </CartItemWrap>
  );
};

export default CartItem;
