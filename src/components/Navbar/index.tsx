import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import Logo from '../../assets/logo.svg';
import { Nav, Location, NavItems, Header } from './styles';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <Header>
      <Nav>
        <img src={Logo} alt="" />
        <NavItems>
          <Location>
            <MapPin size={24} weight="fill" />
            Ouro Preto, MG
          </Location>
          <NavLink to="/cart" title="My Cart">
            <ShoppingCartSimple size={24} weight="fill" />
          </NavLink>
        </NavItems>
      </Nav>
    </Header>
  );
}
