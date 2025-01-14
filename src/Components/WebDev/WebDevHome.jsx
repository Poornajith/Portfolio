import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import Slider from "./Slider";
import Gallery from "./Gallery";
// import MaintenanceScreen from "../MaintenanceScreen";
import {projects,filterProjects} from "./Projects";
import Filter from './Filter';
import {useState} from "react";

export default function WebDevHome(){

    const [filteredProjects, setFilteredProjects] = useState(projects);
    const handleFilterChange = (selectedCategory) => {
        setFilteredProjects(filterProjects(projects, selectedCategory));
    };

    return(
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                {/*<MaintenanceScreen></MaintenanceScreen>*/}
                <Filter onFilterChange={handleFilterChange} />
                {filteredProjects.map((project) => (
                    <Gallery key={project.title} image={project.images} text={project} />
                ))}
            </Container>
        </div>
    )
}