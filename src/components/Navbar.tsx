import React from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import avatar from '../assets/images/User-avatar.svg.png'

import logoNetFlix from "../assets/images/Netflix_2015_logo.svg.png";

const Navbar = () => {
    return (
        <div className="mv-nav-container">
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
                            <Nav.Link href="#action1" className="mv-nav-navLink">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mv-nav-navLink">
                                TV Shows
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mv-nav-navLink">
                                Movies
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mv-nav-navLink">
                                New & Popular
                            </Nav.Link>
                            <Nav.Link href="#action2" className="mv-nav-navLink">
                                Users Management
                            </Nav.Link>
                        </Nav>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
            <div className="mv-nav-utils-container">
                <Dropdown className="mv-nav-user">
                    <Dropdown.Toggle className="mv-nav-user-btn" style={{backgroundColor: 'grey', width: '40px', height: '40px', borderRadius: '20px'}}>
                        <img src={avatar} style={{width: '15px', height: '15px'}}/>
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
