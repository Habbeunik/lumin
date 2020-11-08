import React from 'react';
import useAppState from '../../appState';
import {
  HeaderWrapper,
  Menu,
  Group,
  NavGroup,
  Logo,
  NavLink,
  Cart,
} from './Elements';

const Header = () => {
  const { openCart, cart } = useAppState();
  const noOfCartItems = cart.length;

  return (
    <HeaderWrapper>
      <Menu />
      <NavGroup>
        <Logo />
        <NavLink>Shop</NavLink>
        <NavLink>Help</NavLink>
        <NavLink>Blog</NavLink>
      </NavGroup>
      <Group>
        <NavLink>Account</NavLink>
        <Cart onClick={openCart} number={noOfCartItems} />
      </Group>
    </HeaderWrapper>
  );
};

export default Header;
