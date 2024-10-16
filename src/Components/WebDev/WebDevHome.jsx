import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import Slider from "./Slider";
import MaintenanceScreen from "../MaintenanceScreen";
import Section from "./Section";

import sportBettingImage1 from '../../Images/Web/Design/Sport Betting live event.png'
import sportBettingImage2 from '../../Images/Web/Design/Sport Betting e sports.png'
import sportBettingImage3 from '../../Images/Web/Design/Sport Betting calendar.png'
import sportBettingImage4 from '../../Images/Web/Design/Sport Betting multi view.png'
import sportBettingImage5 from '../../Images/Web/Design/Sport Betting result center.png'
import sportBettingImage6 from '../../Images/Web/Design/Sport Betting sport event.png'

export default function WebDevHome(){
    const sportBettingText = {
        title : 'Sport Betting Website',
        description : 'UI/UX design with animations for a Korean Client'
    }
    const sportBettingImages = [
        sportBettingImage1,
        sportBettingImage2,
        sportBettingImage3,
        sportBettingImage4,
        sportBettingImage5,
        sportBettingImage6
    ]
    return(
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                {/*<MaintenanceScreen></MaintenanceScreen>*/}
                <Section image={sportBettingImages} text={sportBettingText}></Section>
            </Container>
        </div>
    )
}