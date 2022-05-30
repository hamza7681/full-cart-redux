import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const FullNavbar = () => {
  const { products } = useSelector((state) => state.CartReducer);
  const { token } = useSelector((state) => state.AuthReducer);
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link active>
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              {token ? (
                <>
                  <Nav.Link active>
                    <CartIcon>
                      <BsCart4 />
                    </CartIcon>

                    <Link to="/cart">Cart</Link>
                    <Counter>
                      <span>{products.length}</span>
                    </Counter>
                  </Nav.Link>
                </>
              ) : (
                ""
              )}

              {token ? (
                <Nav.Link active>
                  <span
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </span>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link active>
                    <Link to="/login">Login</Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const CartIcon = styled.span`
  position: relative;
  top: -3px;
  right: 3px;
`;

const Counter = styled.div`
  display: inline-block;
  color: black;
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  span {
    position: relative;
    left: 4px;
    bottom: 1px;
  }
`;

export default FullNavbar;
