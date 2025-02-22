import React from 'react';
import "../Components/GameDev/Style.css"
import {Col, Container, Row} from "react-bootstrap";

import logo_upWork from "../Images/Contact/upwork.jpg";
import logo_fiverr from "../Images/Contact/fiverr.jpg";
import logo_freelancer from "../Images/Contact/freelancer.jpg";
const ContactCards = () => {
    return (
        <div>
            <Container className={'my-5'}>
                <Row>
                    <Col className={'m-4'}>
                        <div className="card">
                            <img className="card-img-top"
                                 src={logo_upWork}
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">UpWork</h5>
                                <a href="https://www.upwork.com/freelancers/~011458d52107c07586?mp_source=share"
                                   className="btn btn-info">Contact</a>
                            </div>
                        </div>
                    </Col>
                    <Col className={'m-4'}>
                        <div className="card">
                            <img className="card-img-top"
                                 src={logo_fiverr}
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Fiverr</h5>
                                <a href="https://www.fiverr.com/s/7YkRp4b"
                                   className="btn btn-info">Contact</a>
                            </div>
                        </div>
                    </Col>
                    <Col className={'m-4'}>
                        <div className="card">
                            <img className="card-img-top"
                                 src={logo_freelancer}
                                 alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Freelancer</h5>
                                <a href="https://www.freelancer.com/u/Poornajith?frm=Poornajith&sb=t"
                                   className="btn btn-info">Contact</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactCards;
