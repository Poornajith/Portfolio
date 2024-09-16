import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import Slider from "./Slider";
import MaintenanceScreen from "../MaintenanceScreen";

export default function WebDevHome(){
    return(
        <div>
            <NavBar></NavBar>
            <Container>
                {/*<Slider></Slider>*/}
                <MaintenanceScreen></MaintenanceScreen>
            </Container>
        </div>
    )
}