import { Carousel } from 'react-responsive-carousel';
import './slider.css'
export default function Slider() {
    return(
        <Carousel showThumbs={true} autoPlay={true} infiniteLoop={true}>
            <div className="web-dev-slider-bg">
                <h1>Web Developer</h1>
            </div>
            <div className="web-design-slider-bg">
                <h1>Web Designer</h1>
            </div>
        </Carousel>
    )
}