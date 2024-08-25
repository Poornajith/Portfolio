import {Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import ico_html from '../../Images/TechIcons/html-5.png'
import ico_css from '../../Images/TechIcons/css-3.png'
import ico_js from '../../Images/TechIcons/js.png'
import ico_react from '../../Images/TechIcons/react.png'
import ico_unity from '../../Images/TechIcons/unity.png'
import ico_unreal from '../../Images/TechIcons/unreal-engine.svg'
import ico_figma from '../../Images/TechIcons/Figma Logo.svg'

export default function MainTextArea() {
    const navigate = useNavigate()
    function OpenGameDev() {
        navigate('/game')
    }
    function OpenWebDev() {
        navigate('/web')
    }
    return(
        <>
            <Container className={'pt-5'}>
                <h1 className={'py-5 text-info'}>Explore My Work</h1>
                <div className="mb-3">
                    <Row>
                        <Col className={''}>
                            <div className="p-5 web-dev rounded m-3 mt-1 text-center align-content-center"
                            onClick={OpenWebDev}>
                                <div className="text-glass rounded-2 hover-hand">
                                    <h1 className={'text-skill'}>Web Developer / Designer</h1>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center">
                                <div>
                                    <img className={'tech-icon mx-3'} src={ico_react} alt=""/>
                                </div>
                                <div>
                                    <img className={'tech-icon mx-3'} src={ico_html} alt=""/>
                                </div>
                                <div>
                                    <img className={'tech-icon mx-3'} src={ico_css} alt=""/>
                                </div>
                                <div>
                                    <img className={'tech-icon mx-3'} src={ico_js} alt=""/>
                                </div>
                                <div>
                                    <img className={'tech-icon mx-3'} src={ico_figma} alt=""/>
                                </div>
                            </div>
                        </Col>
                        <Col className={''}>
                            <div className="p-5 game-dev rounded m-3 mt-1 text-center align-content-center"
                            onClick={OpenGameDev}>
                                <div className="text-glass rounded-2 hover-hand">
                                    <h1 className={'text-skill'}>Game Developer</h1>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center">
                                <div>
                                    <img className={'tech-icon mx-3'} src={ico_unity} alt=""/>
                                </div>
                                <div>
                                    <img className={'tech-icon mx-3'} src={ico_unreal} alt=""/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}