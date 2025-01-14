import React from 'react';
import {Col, Row} from "react-bootstrap";
import './Gallery.css'
import 'react-photo-view/dist/react-photo-view.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';

export default function Gallery({image, text}) {

    return (
        <div>
            <hr/>
            <h1>{text.title}</h1>
            <h3>{text.tech}</h3>
            <p>{text.description}</p>
            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <div className="foo">
                    {image.map((item, index) => (
                        <PhotoView key={index} src={item}>
                            <img className={'gallery-image'} src={item} alt="" style={{objectFit: 'cover'}}/>
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </div>
    )
}
