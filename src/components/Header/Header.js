import React from 'react';
import {
  HeaderWrapper,
  Menu,
  Group,
  NavGroup,
  Logo,
  NavLink,
  Cart,
} from './Elements';

const Header = () => (
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
      <Cart />
    </Group>
  </HeaderWrapper>
);

export default Header;
