import React from "react";
import "./Navbar1.css"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import Header from "./Header";
//import BottomHeader from "./BottomHeader";
import CarouselContainer from "../Slider/CarouselContainer";
import Footer from "../Footer/Footer";
function Navbar1() {
    return (

        <>
            <Header />
            <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle title="Menu" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">HOME</Nav.Link>
                            <Nav.Link href="#pricing">ABOUT US</Nav.Link>
                            <Nav.Link href="#pricing">PRODUCT LINES</Nav.Link>
                            <NavDropdown title="DOWNLOAD CENTRE" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Catalogues & Brochures</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Distributor Promotions</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Home Territory Promotions</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.1">GS Tooling Package Forms</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">RGA Form</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#features">CONTACT US</Nav.Link>
                            <Nav.Link href="#pricing">CUSTOMER LOGIN</Nav.Link>
                            <Nav.Link href="#pricing">FEEDBACK</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CarouselContainer />
            <Footer />
        </>
    )
};
export default Navbar1;