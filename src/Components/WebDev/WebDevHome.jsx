import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import Slider from "./Slider";
import Gallery from "./Gallery";
import MaintenanceScreen from "../MaintenanceScreen";
import {projects} from "./Projects";

export default function WebDevHome(){

    return(
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                {/*<MaintenanceScreen></MaintenanceScreen>*/}
                {projects.map((project) => (
                    <Gallery key={project.title} image={project.images} text={project} />
                ))}

            </Container>
        </div>
    )
}