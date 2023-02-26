import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../../images/msovloeren-logo-transv2.png';
import './header.css';

function Header() {
    return (
        <div >
            <Navbar bg="white" expand="xl" fixed="top">
                <Navbar.Brand href="/home">
                        <img src={logo} height="80" className="logo-light-mode" alt="" />
                    </Navbar.Brand>
                <Container className="center">
                    <Navbar.Toggle aria-controls='basic-navbar-nav'>
                    </Navbar.Toggle>
                    <Nav className="justify-content-center" style={{ flex: 1, fontSize: '28px' , fontWeight: "bold"}}>
                        <Nav.Link href="/vloeren">Vloeren</Nav.Link>
                        <Nav.Link href="/behandelingen">Onderhoud</Nav.Link>
                        <Nav.Link href="/over">Over MSO</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;

/*
<NavDropdown title="Vloeren" id="collasible-nav-dropdown">
<NavDropdown.Item href="/vloeren">Overzicht</NavDropdown.Item>
<NavDropdown.Item href="/hardevloeren">Harde vloeren</NavDropdown.Item>
<NavDropdown.Item href="/flexibelevloeren">Flexibele vloeren</NavDropdown.Item>
<NavDropdown.Item href="/zachtevloeren">Zachte vloeren</NavDropdown.Item>
</NavDropdown>
<NavDropdown title="Onderhoud" id="collasible-nav-dropdown">
<NavDropdown.Item href="/behandelingen">Groot vloeren onderhoud</NavDropdown.Item>
<NavDropdown.Item href="/behandelingen">Periodiek vloeren onderhoud</NavDropdown.Item>
<NavDropdown.Item href="/behandelingen">Onderhoud marmer vloeren</NavDropdown.Item>
</NavDropdown>
*/