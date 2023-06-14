import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import LogoIgnite from '../../assets/logo-ignite.svg';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img src={LogoIgnite} alt="Dois triângulos" />
      <nav>
        <NavLink to="/" title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24}/>
        </NavLink>
      </nav>
    </Container>
  );
}
