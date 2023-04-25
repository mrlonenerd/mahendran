import cool from "../Assets/Image/cool.PNG";
import { ModebtnAtom } from "../Components/Navbar";
import { atom, useAtom } from 'jotai'
import skis from '../Assets/Image/skis.jpg';
import DarkmodeSkills  from "./DarkmodeSkills";
const Skills = () => {
    const [buttonbackcolor, setButtonBackColor] = useAtom(ModebtnAtom)
    return (
        <>
            <div class="container" id="/skills">
                <div class="row pb-5 pt-5">
                    <div class="col-md-4  d-flex justify-content-center" >
                        {
                            buttonbackcolor == false ?
                                <img src={skis} class="img-fluid justify-content-center " />
                                :
                                <img src={cool} class="img-fluid justify-content-center " />

                        }
                    </div>
                   
                    <div class="col-md-8  d-flex justify-content-center">
                    {
                        buttonbackcolor ==false?
                        <DarkmodeSkills/>
                        :
                        <div class='example  justify-content-center'>Skills<br />&amp;<br />certifications</div>
                    }
                    </div>
                </div>
                {
                        buttonbackcolor ==false?
                        null
                        :
                <div class="container pt-5">

                    <div class="card " style={{ width: '80vw' }} >
                        <div class="row ">
                            <div class="col d-flex justify-content-center">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="https://learnbatta.com/assets/images/javascript/javascript-logo.png" alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                        </div>
                                        <div class="flip-card-back" >
                                            <h1>JavaScript</h1>
                                            <p>Javascript Fundamental</p>
                                            <p>javascript Advanced.</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col  d-flex justify-content-center">
                                <div class="flip-card1">
                                    <div class="flip-card-inner1">
                                        <div class="flip-card-front1">
                                            <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/af/7c/96/af7c968a-0f41-2083-dda3-0f4903e450a0/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg" alt="Avatar" style={{ width: "250px", height: "250px", border: "2px solid white" }} />
                                        </div>
                                        <div class="flip-card-back1">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col  d-flex justify-content-center">
                                <div class="flip-card1">
                                    <div class="flip-card-inner1">
                                        <div class="flip-card-front1">
                                            <img src="https://codetru.com/images/all/react-cards.jpg" alt="Avatar" style={{ width: "250px", height: "250px", border: "2px solid white" }} />
                                        </div>
                                        <div class="flip-card-back1">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col  d-flex justify-content-center">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png" alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* #3 */}
                        <div class="row">
                            <div class="col  d-flex justify-content-center">
                                <div class="flip-card1">
                                    <div class="flip-card-inner1">
                                        <div class="flip-card-front1">
                                            <img src=" https://cdn.wallpapersafari.com/58/98/PVwfkZ.png" alt="Avatar" style={{ width: "250px", height: "250px", border: "2px solid white" }} />
                                        </div>
                                        <div class="flip-card-back1">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col  d-flex justify-content-center">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="https://www.simplilearn.com/ice9/course_images/bundle313x225/NodeJS.svgz" alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col  d-flex justify-content-center">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBK3XsIUdVuDfkBDnc7kwD3iiOQZ009wUkQ&usqp=CAU" alt="Avatar" style={{ width: "250px", height: "250px" }} />
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col  d-flex justify-content-center">
                                <div class="flip-card1">
                                    <div class="flip-card-inner1">
                                        <div class="flip-card-front1">
                                            <img src="https://blog.logrocket.com/wp-content/uploads/2022/03/hyperledger-fabric-smart-contracts.png" alt="Avatar" style={{ width: "250px", height: "250px", border: "2px solid white" }} />
                                        </div>
                                        <div class="flip-card-back1">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
}
            </div>




        </>
    )
}

export default Skills