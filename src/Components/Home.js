import {Container} from "react-bootstrap";
import Ico_Home from "../Images/icons/Home.png"
import photo from "../Images/photo.png"
import Ico_linkedIn from "../Images/icons/linkedin.png"
import Ico_Facebook from "../Images/icons/facebook.png"
import Ico_TikTok from "../Images/icons/ticktok.png"
import Ico_youtube from "../Images/icons/youtube.png"
import '../App.css';

export default function Home() {
    return (
        <div>
            <Container className={'m-0 p-0'}>
                <div className="home-bg">
                    <div className="d-flex flex-wrap align-content-center justify-content-center h-100">
                        <div className="glass p-4">
                            <div className="home-ico mb-5">
                                <img src={Ico_Home} alt="home"/>
                            </div>
                            <div className="align-content-center">
                                <h5>Hi, There!</h5>
                                <h1>I'm <span className={'blue fw-bolder'}>Chirantha Poornajith</span></h1>

                                <div className="">
                                    <h2 className={'btn-main rounded'}><span className={'blue fw-bolder'}>Web</span>Designer /
                                        Developer <small>&</small>
                                    </h2>
                                    <h2 className={'btn-main rounded'}><span className={'blue fw-bolder'}>Game</span>Developer</h2>
                                </div>
                            </div>
                            <div className="link-icon-bar d-flex flex-row mt-5">
                                <a href="https://www.linkedin.com/in/chirantha-poornajith-947a671a4">
                                    <div className="link-ico in me-4">
                                        <img src={Ico_linkedIn} alt="linkedIn"/>
                                    </div>
                                </a>

                                <a href="https://web.facebook.com/Poooooori">
                                    <div className="link-ico fb me-4">
                                        <img src={Ico_Facebook} alt="Facebook"/>
                                    </div>
                                </a>

                                <a href="https://www.tiktok.com/@poornajith_3d?_t=8oQN30MRBwI&_r=1">
                                    <div className="link-ico tik-tok me-4">
                                        <img src={Ico_TikTok} alt="Tiktok"/>
                                    </div>
                                </a>

                                <a href="https://www.youtube.com/channel/UCueEM7Q5zddY8n4R4WDC9LA">
                                    <div className="link-ico youtube me-4">
                                        <img src={Ico_youtube} alt="Youtube"/>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="">
                        <img src={photo} alt="blue shape" className={'photo'}/>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}