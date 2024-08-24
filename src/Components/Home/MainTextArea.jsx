import {Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function MainTextArea() {
    const navigate = useNavigate()
    return(
        <>
            <Container className={'pt-5'}>
                <h1 className={'py-5 text-info'}>Explore My Work</h1>
                <div className="my-3">
                    <Row>
                        <Col className={'p-5 glass rounded me-3 text-center align-content-center'}>
                            <h1 className={'text-skill'}>Web Developer / Designer</h1>
                        </Col>
                        <Col className={'p-5 glass rounded me-3 text-center align-content-center'}>
                            <h1 className={'text-skill'}>Game Developer</h1>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}