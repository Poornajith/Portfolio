import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import logo from '../Images/SocialIcons/Home.png'

export default function NavBar() {
    const navigate = useNavigate()
    return(
        <div>
            <Navbar expand="lg" className="nav-bar glass">
                <Container>
                    <Navbar.Brand onClick={() => navigate(`/`)}>
                        <img src={logo} alt="logo" className={'w-20'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={'text-info'} onClick={() => navigate(`/`)}>Home</Nav.Link>
                            <Nav.Link className={'text-info'} onClick={() => navigate(`/web`)}>Web Dev.</Nav.Link>
                            <Nav.Link className={'text-info'} onClick={() => navigate(`/game`)}>Game Dev.</Nav.Link>
                            <Nav.Link className={'text-info'} onClick={() => navigate(`/contact`)}>Contact Me</Nav.Link>
                            <Nav.Link className={'text-info'} onClick={() => navigate(`/about`)}>About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}