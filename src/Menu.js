import React from 'react';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

export function Menu() {
  return (
    <Navbar color="faded" light toggleable>
      <NavbarBrand>Sample</NavbarBrand>
      <Collapse navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink>Foo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Bar</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;
