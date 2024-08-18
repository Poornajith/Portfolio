import {Container} from "react-bootstrap";
import '../App.css';
import NavBar from "./NavBar";

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Container className={''}>
                <h1>Home</h1>
            </Container>
        </div>
    )
}