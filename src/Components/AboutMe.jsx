import NavBar from "./NavBar";
import {Container} from "react-bootstrap";
import HeroSection from "./Home/HeroSection";

export default function AboutMe(){
    return(
        <div>
            <NavBar></NavBar>
            <Container>
                <h1>About Me</h1>
                <HeroSection></HeroSection>
            </Container>
        </div>
    )
}