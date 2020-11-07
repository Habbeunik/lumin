import styled from 'styled-components';

export const Header = styled.div`
  padding: 80px;

  @media (max-width: 768px) {
    padding: 80px 0px;
  }
`;
export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.25em;
  font-family: freight-display-pro, serif;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
export const SubTitle = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-family: Bau;
  margin: 10px 0px;
`;
export const GalleryWrap = styled.div`
  background-color: #e2e6e2;
`;
export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 15px;
  }
`;
export const GalleryItem = styled.div`
  padding: 3rem 2rem;

  @media (max-width: 768px) {
    padding: 50px 0px;
  }
`;

export const ProductItemWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const ProductImg = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: contain;
`;
export const ProductName = styled.p`
  font-family: Bau;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
export const ProductPrice = styled.p`
  font-size: 18px;
  margin: 0px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 15px;
  }
`;
export const ProductButton = styled.button`
  display: flex;
  appearance: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transition: all 250ms ease 0s;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  border: 0px;
  line-height: 1.2;
  padding-top: 2px;
  font-weight: 600;
  font-size: 14px;
  font-family: Bau;
  padding-left: 1rem;
  padding-right: 1rem;
  min-height: 52px;
  background: rgb(75, 85, 72);
  color: rgb(252, 252, 249);
  width: 100%;
  max-width: 197px;
  margin-top: 10px;
  cursor: pointer;

  @media (max-width: 930px) {
    max-width: 100%;
  }

  &:hover {
    background: rgb(43, 46, 43);
  }
`;
