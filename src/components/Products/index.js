import React, { Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';

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

const PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }
`;

const Products = () => {
  const { loading, error, data = {} } = useQuery(PRODUCTS_QUERY);
  const { products = [] } = data;

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
              <GalleryItem>
                <ProductItem
                  name={product.title}
                  price={product.price}
                  img={product.image_url}
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
