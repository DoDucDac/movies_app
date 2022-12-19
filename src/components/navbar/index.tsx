import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import avatar from "../../assets/images/User-avatar.svg.png";

import { NavLink } from "react-router-dom";
import logoNetFlix from "../../assets/images/Netflix_2015_logo.svg.png";
import { ROUTES } from "../../constants";
import AvatarUser from "../avatar";

const Navbar = () => {
  return (
    <div className="mv-nav-container container">
      <NavBar bg="Dark" expand="lg">
        <Container fluid>
          <NavBar.Brand href="/home">
            <img src={logoNetFlix} style={{ width: "100%", height: "25px" }} />
          </NavBar.Brand>
          <NavBar.Toggle aria-controls="navbarScroll" />
          <NavBar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                to={ROUTES.HOME}
                className={({ isActive }) =>
                  isActive ? "mv-nav-navLink-active" : "mv-nav-navLink"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="#action"
                className={({ isActive }) =>
                  isActive ? "mv-nav-navLink" : "test"
                }
              >
                TV Shows
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  isActive ? "mv-nav-navLink" : "test"
                }
              >
                Movies
              </NavLink>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  isActive ? "mv-nav-navLink" : "test"
                }
              >
                New & Popular
              </NavLink>
              <NavLink
                to={ROUTES.USERS}
                className={({ isActive }) =>
                  isActive ? "mv-nav-navLink-active" : "mv-nav-navLink"
                }
              >
                Users Management
              </NavLink>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
      <div className="mv-nav-utils-container">
        <Dropdown className="mv-nav-user">
          <Dropdown.Toggle
            className="mv-nav-user-btn"
            style={{
              backgroundColor: "grey",
              width: "40px",
              height: "40px",
              borderRadius: "20px",
            }}
          >
            <img src={avatar} style={{ width: "15px", height: "15px" }} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
