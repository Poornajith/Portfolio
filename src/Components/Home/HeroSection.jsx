import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import photo from '../../Images/photo.png'

gsap.registerPlugin(TextPlugin);
export default function HeroSection() {
    const title = useRef()

    useGSAP(()=>{
        const texts = ['WEB DESIGNER', 'WEB DEVELOPER', 'GAME DEVELOPER']; // Array of text options

        let tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 }); // Loop indefinitely

        texts.forEach((text, index) => {
            tl.to(".skill", {
                duration: 1.5,
                text: text, // Update text to the current element
                ease: 'power3.inOut', // Add optional easing for smoother transitions
            })
                .to(".skill", { // Add a pause between texts
                    duration: 0.5, // Adjust pause duration as needed
                }, index !== texts.length - 1 ? `+=${index * 2.5}` : '+=1.5'); // Stagger pauses (optional)
        });

        gsap.to(".name",{
            duration:1.5,
            text:"Chirantha Poornajith",
            ease:"none"
        })
        tl.play(); // Start the animation
    },{scope:title})
    return(
        <>
            <div ref={title}>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    <div className="justify-content-center align-content-center">
                        <div className="rounded-circle p-2 glass">
                            <img src={photo} className={'rounded-circle photo'} alt=""/>
                        </div>
                    </div>
                    <div className="m-2 align-content-center">
                        <div className="hero-glass p-4 rounded-end-pill">
                            <h5>Hi, There !</h5>
                            <h1>I'm <span className={'name text-matrix'}>アァカサタナハマヤ ガザダバパイィキシチ</span>
                            </h1>
                            <h1 className={'skill text-skill'}>カサタナハマヤ ガザダバ</h1>
                            <h6>BSc (Hons) Software Engineering</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}