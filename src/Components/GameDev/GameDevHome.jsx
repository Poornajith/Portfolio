import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import MaintenanceScreen from "../MaintenanceScreen";
import HeroSection from "./HeroSection";
import PimonsMora from "./PimonsMora";

export default function GameDevHome(){
    return(
        <div>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <Container>
                <MaintenanceScreen></MaintenanceScreen>
                <div className="">
                    <PimonsMora></PimonsMora>
                </div>
            </Container>
        </div>
    )
}