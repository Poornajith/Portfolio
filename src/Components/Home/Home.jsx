import '../../App.css';
import NavBar from "../NavBar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import MetrixRain from "./MetrixRain";
import MainTextArea from "./MainTextArea";
import HeroSection from "./HeroSection";

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
                    <div className="parallax-img parallax-layer-0 align-content-center">
                        <HeroSection></HeroSection>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={2.3}>
                    <div className="parallax-text py-5">
                        <MainTextArea></MainTextArea>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}