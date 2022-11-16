import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import Logo from './../../Images/logo.png';

export default function Header(){
    return (
        <Navbar id="header" expand="lg">
            <Navbar.Brand>
                <Image src={ Logo } fluid />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                navbarScroll
                >
                    <Navbar>
                        <Link to="/">Home</Link>
                    </Navbar>
                    <Navbar>
                        <Link to="/banco-de-dados">Banco de dados</Link>
                    </Navbar>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}