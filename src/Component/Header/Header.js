import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import canada from '../../assets/flag_ca.gif';
import "./Navbar1.css"
function Header() {
    return (
        <>
            <Navbar className="Navbar-Header" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle className="toggle" title="Menu" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features"><img src={canada} alt="" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};
export default Header;