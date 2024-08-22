import {Container} from "react-bootstrap";
import '../../App.css';
import NavBar from "../NavBar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import MetrixRain from "./MetrixRain";

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={0.5}>
                    <MetrixRain></MetrixRain>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.8}>
                    <div className="parallax-img parallax-layer-4"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="parallax-img parallax-layer-3"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.3}>
                    <div className="parallax-img parallax-layer-2"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.6}>
                    <div className="parallax-img parallax-layer-1"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.9}>
                    <div className="parallax-img parallax-layer-0"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={2}>
                    <div className="parallax-text py-5">
                        <Container className={''}>
                            <h1 className={'pt-5'}>Home</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Container>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}