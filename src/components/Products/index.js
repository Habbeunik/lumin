import React, { Fragment } from 'react';
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

const Products = () => (
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
          <GalleryItem>
            <ProductItem
              name="Age Management Set"
              price="$52.00"
              img="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968"
            />
          </GalleryItem>
          <GalleryItem>
            <ProductItem
              name="Modern Bathroom Set"
              price="$52.00"
              img="https://cdn.shopify.com/s/files/1/2960/5204/products/unnamed_1024x1024.png?v=1588260405"
            />
          </GalleryItem>
          <GalleryItem>
            <ProductItem
              name="Classic Maintenance Set"
              price="$52.00"
              img="https://cdn.shopify.com/s/files/1/2960/5204/products/classic-maintenance_1024x1024_1_1024x1024.png?v=1602810560"
            />
          </GalleryItem>
          <GalleryItem>
            <ProductItem
              name="Age Management Set"
              price="$52.00"
              img="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968"
            />
          </GalleryItem>
          <GalleryItem>
            <ProductItem
              name="Age Management Set"
              price="$52.00"
              img="https://cdn.shopify.com/s/files/1/2960/5204/products/age-management_1024x1024_ad6e7a36-7242-469c-9fb5-242f5ee9c83f_1024x1024.png?v=1602809968"
            />
          </GalleryItem>
        </Gallery>
      </Container>
    </GalleryWrap>
  </Fragment>
);

export default Products;
