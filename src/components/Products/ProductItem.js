import React, { useCallback } from 'react';
import {
  ProductName,
  ProductImg,
  ProductPrice,
  ProductButton,
  ProductItemWrap,
} from './Elements';

const ProductItem = ({ img, name, price, id, onAddToCart }) => {
  const handleAddToCart = useCallback(() => onAddToCart(id), [onAddToCart, id]);

  return (
    <ProductItemWrap>
      <div
        style={{ height: '150px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <ProductImg src={img} />
      </div>
      <ProductName>{name}</ProductName>
      <ProductPrice>From: {price}</ProductPrice>
      <ProductButton onClick={handleAddToCart}>Add To Cart</ProductButton>
    </ProductItemWrap>
  );
};

export default ProductItem;
