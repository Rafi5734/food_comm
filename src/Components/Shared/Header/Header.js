import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { HashLink } from "react-router-hash-link";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  return (
    <Navbar
      style={{ backgroundColor: "#1c2331" }}
      variant="dark"
      sticky="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand as={HashLink} to="/home">
          <div className="logo d-flex align-items-center">
            <h3 className="text-danger">বাঙা</h3>
            <h3 className="text-white">লিয়ানা</h3>
          </div>
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-danger"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home">
              হোম
            </Nav.Link>
            <Nav.Link as={HashLink} to="/allFoods">
              আইটেমস
            </Nav.Link>
            {user && (
              <Nav.Link as={HashLink} to="/dashboard">
                ড্যাশবোর্ড
              </Nav.Link>
            )}
            {/* {user && (
              <Nav.Link as={HashLink} to="/wishlist">
                পছন্দ তালিকা
              </Nav.Link>
            )} */}
            {user ? (
              <NavDropdown
                className="text-uppercase fw-bold shadow-lg"
                title={user?.displayName}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Button
                    onClick={logOut}
                    type="button"
                    className="btn btn-dark rounded-3 px-auto"
                  >
                    লগ আউট
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link className="fw-bold shadow-sm" as={HashLink} to="/login">
                লগইন
              </Nav.Link>
            )}
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
