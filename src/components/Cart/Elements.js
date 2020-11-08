import styled from 'styled-components';

import BackIcon from '../../assets/icons/back.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
`;
export const Overlay = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  opacity: 0.8;
  background: rgb(205, 209, 206);
  backdrop-filter: blur(3px);
`;
export const Content = styled.div`
  width: 100%;
  max-width: 550px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;
  background-color: #f2f2ef;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.div`
  border-radius: 50%;
  border: 1px solid rgb(198, 204, 199);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;

  img {
    width: 10px;
  }
`;
export const Back = ({ onClick }) => (
  <BackButton onClick={onClick}>
    <img src={BackIcon} />
  </BackButton>
);
export const Title = styled.span`
  text-transform: uppercase;
  font-family: Bau;
  color: rgb(198, 204, 199);
  color: #696969;
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 1px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
`;
export const Select = styled.select`
  padding: 5px 13px 5px 10px;
  background-position: 100% 60%;
  max-width: 80px;
  background-color: white;
  border: none;
  font-family: Bau;
  font-size: 13px;
`;
export const CartItemDisplay = styled.div`
  flex: 1;
  overflow-y: scroll;
  margin-bottom: 15px;

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f2f2ef;
  }

  &::-webkit-scrollbar-thumb {
    background: #909090;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CartItemWrap = styled.div`
  padding: 15px;
  background-color: white;
  margin-top: 15px;
  position: relative;
`;
export const CartItemTitle = styled.p`
  font-family: Bau;
  font-size: 13px;
  font-weight: 600;
  color: #1e2d2b;
  margin: 0px;
  letter-spacing: 0.3px;
`;

export const CartItemCancel = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  text-transform: uppercase;
  font-size: 13px;
  font-family: Bau;
`;
export const CartItemImg = styled.img`
  height: 50px;
  margin: 10px 0px;
`;

const QuantityWrap = styled.div`
  border: 0.5px solid #bcbcbc;
  padding: 7px;
  width: 76px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
const QuantityAction = styled.span`
  cursor: pointer;
  color: #000;
  font-size: 15px;
`;
const QuantityText = styled.span`
  padding: 0 10px;
  font-size: 13px;
  font-family: Bau;
  position: relative;
  top: -3px;
`;
export const CartItemBottomRow = styled.div`
  display: flex;
`;
export const QuantityManager = ({ quantity, onIncrease, onDecrease }) => (
  <QuantityWrap>
    <QuantityAction onClick={() => onDecrease()}>-</QuantityAction>
    <QuantityText>{quantity}</QuantityText>
    <QuantityAction onClick={() => onIncrease()}>+</QuantityAction>
  </QuantityWrap>
);
export const PriceWrap = styled.div`
  text-align: center;
  flex: 1;
`;
export const Price = styled.span`
  padding: 0 10px;
  width: inherit;
  font-size: 13px;
  font-family: Bau;
  letter-spacing: 0.03px;
`;
export const BottomSection = styled.div`
  padding: 15px 0px;
  border-top: 1px solid #2b2e2b;
`;
export const SubTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SubTotalLabel = styled.span`
  font-family: Bau;
  font-size: 14px;
`;
export const SubTotalPrice = styled.span`
  font-family: Bau;
  font-size: 18px;
  font-weight: 600;
`;
export const CheckoutButton = styled.button`
  color: #fff;
  letter-spacing: 2px;
  background-color: #4b5548;
  border: none;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  padding: 16px 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-family: Bau;
`;
