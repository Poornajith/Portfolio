import {Container} from "react-bootstrap";
import '../App.css';
import NavBar from "./NavBar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import trees from '../Images/Wallpaper/Trees.png'
import mountain_n0 from '../Images/Wallpaper/Mountain-n0.png'
import mountain_n1 from '../Images/Wallpaper/mountain-n1.png'
import mountain_n2 from '../Images/Wallpaper/mountain-n2.png'
import mountain_n3 from '../Images/Wallpaper/mountain-n3.png'
import MetrixRain from "./Home/MetrixRain";

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            {/*<Parallax pages={2} style={{ top: '0', left: '0' }}>*/}
            {/*    <ParallaxLayer offset={0} speed={2.5}>*/}
            {/*        <div className="parallax-img parallax-layer-bg"></div>*/}
            {/*    </ParallaxLayer>*/}
            {/*    <ParallaxLayer offset={0} speed={1}>*/}
            {/*        <div className="parallax-img parallax-layer-4"></div>*/}
            {/*    </ParallaxLayer>*/}
            {/*    <ParallaxLayer offset={0} speed={1.5}>*/}
            {/*        <div className="parallax-img parallax-layer-3"></div>*/}
            {/*    </ParallaxLayer>*/}
            {/*    <ParallaxLayer offset={0} speed={2.0}>*/}
            {/*        <div className="parallax-img parallax-layer-2"></div>*/}
            {/*    </ParallaxLayer>*/}
            {/*    <ParallaxLayer offset={0} speed={2.3}>*/}
            {/*        <div className="parallax-img parallax-layer-1"></div>*/}
            {/*    </ParallaxLayer>*/}
            {/*    <ParallaxLayer offset={0} speed={2.5}>*/}
            {/*        <div className="parallax-img parallax-layer-0"></div>*/}
            {/*    </ParallaxLayer>*/}
            {/*    <ParallaxLayer offset={1} speed={2.8}>*/}
            {/*        <div className="parallax-text">*/}
            {/*            <Container className={''}>*/}
            {/*                <h1>Home</h1>*/}
            {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
            {/*            </Container>*/}
            {/*        </div>*/}
            {/*    </ParallaxLayer>*/}
            {/*</Parallax>*/}
            <MetrixRain></MetrixRain>

        </div>
    )
}