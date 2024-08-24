import Ico_linkedIn from '../../Images/SocialIcons/linkedin.png'
import Ico_Facebook from '../../Images/SocialIcons/facebook.png'
import Ico_TikTok from '../../Images/SocialIcons/ticktok.png'
import Ico_youtube from '../../Images/SocialIcons/youtube.png'
import './home.css'
export default function SocialMedia() {
    return(
        <>
            <div className={'link-icon-bar d-flex flex-wrap m-2'}>
                <div className=" glass p-3 rounded">
                    <a href="https://www.linkedin.com/in/chirantha-poornajith-947a671a4">
                        <div className="link-ico in">
                            <img src={Ico_linkedIn} alt="linkedIn"/>
                        </div>
                    </a>
                    <a href="https://web.facebook.com/Poooooori">
                        <div className="link-ico fb">
                            <img src={Ico_Facebook} alt="Facebook"/>
                        </div>
                    </a>
                    <a href="https://www.tiktok.com/@poornajith_3d?_t=8oQN30MRBwI&_r=1">
                        <div className="link-ico tik-tok">
                            <img src={Ico_TikTok} alt="Tiktok"/>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCueEM7Q5zddY8n4R4WDC9LA">
                        <div className="link-ico youtube">
                            <img src={Ico_youtube} alt="Youtube"/>
                        </div>
                    </a>

                </div>
            </div>
        </>
    )
}