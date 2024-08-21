import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import logo from '../Images/icons/Home.png'

export default function NavBar() {
    const navigate = useNavigate()
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary nav-bar">
                <Container>
                    <Navbar.Brand onClick={() => navigate(`/`)}>
                        <img src={logo} alt="logo" className={'w-20'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate(`/`)}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate(`/web`)}>Web Dev.</Nav.Link>
                            <Nav.Link onClick={() => navigate(`/game`)}>Game Dev.</Nav.Link>
                            <Nav.Link onClick={() => navigate(`/contact`)}>Contact Me</Nav.Link>
                            <Nav.Link onClick={() => navigate(`/about`)}>About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}