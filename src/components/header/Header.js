import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="shadow-sm  bg-white rounded">
          <Container>
            <NavbarBrand className="brand_text_style" href="/">
              E-Kart
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>ABOUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>CONTACT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>BAG</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
