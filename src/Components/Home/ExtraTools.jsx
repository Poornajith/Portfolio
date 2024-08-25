import {Col, Container, Row} from "react-bootstrap";
import ico_ae from "../../Images/TechIcons/after-effects.png";
import ico_pr from "../../Images/TechIcons/premiere-pro.png";
import ico_ai from "../../Images/TechIcons/illustrator.png";
import ico_ps from "../../Images/TechIcons/photoshop.png";
import ico_blender from "../../Images/TechIcons/blender.png";

export default function ExtraTools() {
    return(
        <>
            <Container className={'mt-5'}>
                <Row>
                    <h1 className={'text-info mb-3'}>Extra Skills</h1>
                </Row>
                <Row>
                    <Col className={''}>
                        <div className="p-5 graphic-design rounded m-3 mt-1 text-center align-content-center">
                            <div className="text-glass rounded-2 hover-hand">
                                <h1 className={'text-skill'}>Graphic Design</h1>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div>
                                <img className={'tech-icon mx-3'} src={ico_ps} alt=""/>
                            </div>
                            <div>
                                <img className={'tech-icon mx-3'} src={ico_ai} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col className={''}>
                        <div className="p-5 modeling rounded m-3 mt-1 text-center align-content-center">
                            <div className="text-glass rounded-2 hover-hand">
                                <h1 className={'text-skill'}>3D Modeling</h1>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div>
                                <img className={'tech-icon mx-3'} src={ico_blender} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col className={''}>
                        <div className="p-5 vid-edit rounded m-3 mt-1 text-center align-content-center">
                            <div className="text-glass rounded-2 hover-hand">
                                <h1 className={'text-skill'}>Video Editing</h1>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div>
                                <img className={'tech-icon mx-3'} src={ico_ae} alt=""/>
                            </div>
                            <div>
                                <img className={'tech-icon mx-3'} src={ico_pr} alt=""/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}