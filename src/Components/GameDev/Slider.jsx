import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css'
export default function Slider() {
    return(
        <Carousel showThumbs={true} autoPlay={true} infiniteLoop={true}>
            <div className="game-dev-slider-bg_1 slider-content">
                <h1 className={'slider-title'}>2D Platformer</h1>
            </div>
            <div className="game-dev-slider-bg_3 slider-content">
                <h1 className={'slider-title'}>Top Down 2D</h1>
            </div>
            <div className="game-dev-slider-bg_2 slider-content">
                <h1 className={'slider-title'}>TPP Adventure</h1>
            </div>
        </Carousel>
    )
}