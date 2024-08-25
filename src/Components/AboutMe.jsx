import NavBar from "./NavBar";
import {Container} from "react-bootstrap";

export default function AboutMe(){
    return(
        <div>
            <NavBar></NavBar>
            <Container className={'my-5'}>
                <h4>I'm</h4>
                <h1>Chirantha Poornajith Ranasingha</h1>
                <p> Software Engineer with experience in web application development, OOP, and SOLID
                    principles. Proven ability to optimize website performance and streamline business
                    processes. Background in data modeling, machine learning, and distributed cloud
                    computing</p>
                <h3>Education</h3>
                <h4>Bachelor of Science Honours- Software Engineering </h4>
                <h6>University of Kelaniya, Kelaniya</h6>
                <h3>Skills</h3>
                <ul>
                    <li>Expert in:
                        <ul>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS, Bootstrap
                            </li>
                            <li>
                                JavaScript, React
                            </li>
                            <li>
                                Creative Design
                            </li>
                            <li>
                                Git
                            </li>
                        </ul>
                    </li>
                    <li>Intermediate in:
                        <ul>
                            <li>PHP, Laravel</li>
                            <li>Unity, C#</li>
                            <li>Java, SpringBoot</li>
                            <li>Machine Learning</li>
                        </ul>
                    </li>
                    <li>Basic in:
                        <ul>
                            <li>Unreal Engine</li>
                            <li>Python</li>
                            <li>SonarCube, Jenkins</li>
                        </ul>
                    </li>
                </ul>
                <h3>EXPERIENCE</h3>
                <h6> Software Engineer- Intern
                    Jan 2023- Jul 2023</h6>
                <p><a href="https://blockstarsglobal.com/">Block-Stars Pvt. Ltd.</a>, Kurunegala</p>
                <p>Optimized website load times by X% resulting in smoother user interactions and
                    engagement for Web applications.
                    Developed web application features using Laravel and React, streamlining business
                    processes and contributing to a positive user experience.
                    Collaborated with cross-functional teams using ClickUp to efficiently manage project
                    timelines and ensure seamless software integrations.
                    Maintained code quality and streamlined deployment processes using Linux servers,
                    Docker, SonarQube, Git, and Jenkins, ensuring software reliability.</p>
                <h6>UI/UX Design and Developer- Part-time remote Nov 2021- Jul 2023</h6>
                <p><a href="https://blockstarsglobal.com/">Block-Stars Pvt. Ltd.</a>, Kurunegala</p>
                <p> 1 year and 7 months of experience in UI/UX design and development for Korean-market
                    NFT, blockchain, and casino web applications. Demonstrated adaptability in designing user
                    experiences for complex systems. Proficient in Figma, XD, Adobe tools, and front-end
                    development with HTML, CSS, JavaScript, and Bootstrap. Experience in in-game asset
                    creation and Unity/JavaScript development.</p>
                <h4>VOLUNTEER</h4>
                <p> Graphic Designer
                    Apr 2022- Jun 2023
                    IEEE Student Branch University of Kelaniya</p>
            </Container>
        </div>
    )
}