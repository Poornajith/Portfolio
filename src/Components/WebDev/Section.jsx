import React from 'react';
import {Col, Row} from "react-bootstrap";
import './Section.css'
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

import laptopFrame from '../../Images/laptop frame.png'
export default function Section({image, text}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % image.length;
            setCurrentIndex(nextIndex);
        }, 1500);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div>
            <Row>
                <Col sm={12} md={6}>
                    <div className="position-relative">
                        <div className="position-absolute">
                            <img src={laptopFrame} alt="laptop frame"/>
                        </div>
                        <div className="">
                            <img ref={imageRef} src={image[currentIndex]} alt="image placeholder"/>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} className={'align-content-center'}>
                    <div className="text ms-2 mt-2">
                        <h1 className="title">{text.title}</h1>
                        <p>{text.description}</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
