import React, { Fragment } from 'react';
import useAppState from '../../appState';
import { Container } from './../Layout';
import {
  Header,
  Title,
  SubTitle,
  GalleryWrap,
  Gallery,
  GalleryItem,
} from './Elements';
import ProductItem from './ProductItem';

const Products = ({}) => {
  const { addToCart, products, currencySymbol } = useAppState();

  return (
    <Fragment>
      <Container>
        <Header>
          <Title>All Products</Title>
          <SubTitle>A 360° look at Lumin</SubTitle>
        </Header>
      </Container>

      <GalleryWrap>
        <Container>
          <Gallery>
            {products.map((product) => (
              <GalleryItem key={product.id}>
                <ProductItem
                  id={product.id}
                  name={product.title}
                  price={`${currencySymbol}${product.price}`}
                  img={product.image_url}
                  onAddToCart={addToCart}
                />
              </GalleryItem>
            ))}
          </Gallery>
        </Container>
      </GalleryWrap>
    </Fragment>
  );
};

export default Products;
