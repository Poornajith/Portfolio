import NavBar from "./NavBar";
import {Container} from "react-bootstrap";
// import MaintenanceScreen from "./MaintenanceScreen";


import ContactCards from "./ContactCards";
export default function ContactMe(){
    return(
        <div>
            <NavBar></NavBar>
            <Container>
                {/*<MaintenanceScreen></MaintenanceScreen>*/}
                <ContactCards></ContactCards>
            </Container>
        </div>
    )
}