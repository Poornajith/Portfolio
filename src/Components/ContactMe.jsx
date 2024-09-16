import NavBar from "./NavBar";
import {Container} from "react-bootstrap";
import MaintenanceScreen from "./MaintenanceScreen";

export default function ContactMe(){
    return(
        <div>
            <NavBar></NavBar>
            <Container>
                <MaintenanceScreen></MaintenanceScreen>
            </Container>
        </div>
    )
}