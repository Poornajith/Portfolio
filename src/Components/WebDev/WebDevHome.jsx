import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import Slider from "./Slider";
import MaintenanceScreen from "../MaintenanceScreen";
import Section from "./Section";

//sport betting site
import sportBettingImage1 from '../../Images/Web/Design/Sport Betting live event.png'
import sportBettingImage2 from '../../Images/Web/Design/Sport Betting e sports.png'
import sportBettingImage3 from '../../Images/Web/Design/Sport Betting calendar.png'
import sportBettingImage4 from '../../Images/Web/Design/Sport Betting multi view.png'
import sportBettingImage5 from '../../Images/Web/Design/Sport Betting result center.png'
import sportBettingImage6 from '../../Images/Web/Design/Sport Betting sport event.png'
//Sky net
import skyNetImage1 from '../../Images/Web/Dev/SkyNet1.png'
import skyNetImage2 from '../../Images/Web/Dev/SkyNet2.png'
import skyNetImage3 from '../../Images/Web/Dev/SkyNet3.png'
import skyNetImage4 from '../../Images/Web/Dev/SkyNet4.png'
import skyNetImage5 from '../../Images/Web/Dev/SkyNet5.png'
import skyNetImage6 from '../../Images/Web/Dev/SkyNet6.png'
import skyNetImage7 from '../../Images/Web/Dev/SkyNet7.png'
import skyNetImage8 from '../../Images/Web/Dev/SkyNet8.png'
//Vouge Vibes
import vibes1 from '../../Images/Web/Dev/vibes1.png'
import vibes2 from '../../Images/Web/Dev/vibes2.png'
import vibes3 from '../../Images/Web/Dev/vibes3.png'
import vibes4 from '../../Images/Web/Dev/vibes4.png'
import vibes5 from '../../Images/Web/Dev/vibes5.png'
import vibes6 from '../../Images/Web/Dev/vibes6.png'
//client portal
import client1 from '../../Images/Web/Dev/client go 1.png'
import client2 from '../../Images/Web/Dev/client go 2.png'
import client3 from '../../Images/Web/Dev/client go 3.png'
import client4 from '../../Images/Web/Dev/client go 4.png'
import client5 from '../../Images/Web/Dev/client go 5.png'
import client6 from '../../Images/Web/Dev/client go 6.png'
import client7 from '../../Images/Web/Dev/client go 7.png'
import client8 from '../../Images/Web/Dev/client go 8.png'
import client9 from '../../Images/Web/Dev/client go 9.png'
export default function WebDevHome(){

    // sport betting
    const sportBettingText = {
        title : 'Sport Betting Website',
        description : 'UI/UX design with animations for a Korean Client',
        tech : 'Figma'
    }
    const sportBettingImages = [
        sportBettingImage1,
        sportBettingImage2,
        sportBettingImage3,
        sportBettingImage4,
        sportBettingImage5,
        sportBettingImage6
    ]
    // Sky Net
    const skyNetText = {
        title : 'SkyNet',
        description: 'Trading simulator with three charts',
        tech : 'React, Firebase Auth, Firebase Realtime Database, Firebase web hosting'
    }
    const skyNetImages = [
        skyNetImage1,
        skyNetImage2,
        skyNetImage3,
        skyNetImage4,
        skyNetImage5,
        skyNetImage6,
        skyNetImage7,
        skyNetImage8,
    ]
    // Vogue Vibes
    const vogueVibesText = {
        title : 'Vogue Vibes',
        description: 'Beauty Saloon landing page template',
        tech : 'React, Firebase web hosting'
    }
    const vogueVibesImages = [
        vibes1,
        vibes2,
        vibes3,
        vibes4,
        vibes5,
        vibes6
    ]
    //client portal
    const clientPortalText = {
        title : 'Client Portal',
        description: 'Landing page template developed for a software company',
        tech : 'React, Firebase web hosting'
    }
    const clientPortalImages = [
        client1,
        client2,
        client3,
        client4,
        client5,
        client6,
        client7,
        client8,
        client9
    ]

    return(
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                {/*<MaintenanceScreen></MaintenanceScreen>*/}
                <Section image={sportBettingImages} text={sportBettingText}></Section>
                <Section image={skyNetImages} text={skyNetText}></Section>
                <Section image={vogueVibesImages} text={vogueVibesText}></Section>
                <Section image={clientPortalImages} text={clientPortalText}></Section>
            </Container>
        </div>
    )
}