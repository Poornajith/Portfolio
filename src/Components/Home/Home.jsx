import '../../App.css';
import NavBar from "../NavBar";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import MetrixRain from "./MetrixRain";
import MainTextArea from "./MainTextArea";
import HeroSection from "./HeroSection";
import './home.css'
import SocialMedia from "./SocialMedia";
import ExtraTools from "./ExtraTools";

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={0.6}>
                    <MetrixRain></MetrixRain>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0.8}>
                    <div className="parallax-img parallax-layer-4"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className="parallax-img parallax-layer-3"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.2}>
                    <div className="parallax-img parallax-layer-2"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.4}>
                    <div className="parallax-img parallax-layer-1"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1.6}>
                    <div className="parallax-img parallax-layer-0 align-content-center m-1">
                        <HeroSection></HeroSection>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.4} speed={1.7}>
                    <div className="">
                        <SocialMedia></SocialMedia>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={1.8}>
                    <div className="parallax-text py-5">
                        <MainTextArea></MainTextArea>
                        <ExtraTools></ExtraTools>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}