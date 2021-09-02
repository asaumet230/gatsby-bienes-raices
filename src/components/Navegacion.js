import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  
  @media (min-width: 768px){
    flex-direction: row;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  color:#fff;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  padding: 0.4rem;

  &.pagina-actual {
    border-bottom: 1px solid #fff;
  }

  @media (min-width: 768px){
    margin-right: 1rem;

    &:last-of-type {
      margin-right: 0;
    }
  }

`

const Navegacion = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="pagina-actual">Inicio</NavLink>
      <NavLink to={"/nosotros"} activeClassName="pagina-actual">Nosotros</NavLink>
      <NavLink to={"/bienes"} activeClassName="pagina-actual">Propiedades</NavLink>
      
    </Nav>
  )
}

export default Navegacion
