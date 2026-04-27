import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from "react-router";

function NavScroll() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home" id="home">Home</Nav.Link>
                        <NavDropdown title="ToDo">
                            <NavDropdown.Item href="/add-todo">Add ToDo</NavDropdown.Item>
                            <NavDropdown.Item href="/show-done-todo">
                                Show Done ToDo
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Notes">
                            <NavDropdown.Item href="/add-note">Add Note</NavDropdown.Item>
                            <NavDropdown.Item href="/show-notes">
                                Show Notes
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/*<Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;