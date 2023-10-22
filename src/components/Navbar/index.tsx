import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import * as S from './styles';

export function Navbar() {
  return (
    <S.Header>
      <S.Nav>
        <NavLink to="/" title="Go to home">
          <img src={Logo} alt="" />
        </NavLink>
        <S.NavItems>
          <S.Location>
            <MapPin size={24} weight="fill" />
            Ouro Preto, MG
          </S.Location>
          <NavLink to="/cart" title="My Cart">
            <ShoppingCartSimple size={24} weight="fill" />
          </NavLink>
        </S.NavItems>
      </S.Nav>
    </S.Header>
  );
}
