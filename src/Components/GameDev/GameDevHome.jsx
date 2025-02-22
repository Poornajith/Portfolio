import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import MaintenanceScreen from "../MaintenanceScreen";
// import HeroSection from "./HeroSection";
import PimonsMora from "./PimonsMora";
import Slider from "./Slider";
import "./Style.css";
import GameCards from "./GameCards";

export default function GameDevHome(){
    return(
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            {/*<HeroSection></HeroSection>*/}
            <Container>
                {/*<MaintenanceScreen></MaintenanceScreen>*/}
                <div className="">
                    {/*<PimonsMora></PimonsMora>*/}
                    <GameCards></GameCards>
                </div>
            </Container>
        </div>
    )
}