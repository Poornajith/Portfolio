import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css'
export default function Slider() {
    return(
        <Carousel showThumbs={true} autoPlay={true} infiniteLoop={true}>
            <div className="web-dev-slider-bg slider-content">
                <h1 className={'slider-title'}>Web Developer</h1>
            </div>
            <div className="web-design-slider-bg slider-content">
                <h1 className={'slider-title'}>Web Designer</h1>
            </div>
        </Carousel>
    )
}