
import shashu from "../Assets/Image/shashu.png";
import "../Assets/Style/Info.css";
import cupcake from "../Assets/Image/cake.png";
import couple from "../Assets/Image/couple.png";
import house from "../Assets/Image/house.png";
import { ModebtnAtom } from "../Components/Navbar";
import { atom, useAtom } from 'jotai';
import DarkModeIntro from './intro2'
import animy from "../Assets/Image/lo.png"
const Intro = () => {
    const [buttonbackcolor, setButtonBackColor] = useAtom(ModebtnAtom)

    return (

        <>
            <div>
                {
                    buttonbackcolor == false ?
                        <DarkModeIntro />
                        :
                        <div class="container" >
                            <div class="row">
                                <div class="col-md-4 d-flex justify-content-center">
                                    {
                                        buttonbackcolor == false ?
                                            <img src={animy} alt="profilephoto" class="img-fluid" /> :

                                            <img src={shashu} alt="profilephoto" class="img-fluid" />
                                    }

                                </div>
                                <div class="col text-center">


                                    <div class="introtext">
                                        <h2 class="h2">Hello There!</h2>
                                        <h5 class="h5">SHALINI THIS SIDE</h5>
                                        <h6 class="h6">I AM A FULLSTACK DEVLOPER</h6>

                                    </div>

                                    <div class="row d-flex">
                                        <div class="col mb-2">
                                            <button class="button">
                                                <img src={cupcake} style={{ width: "2rem" }} />
                                                <span data-title="30/05/1999">WISH ME ON   </span>
                                            </button>
                                        </div>
                                        <div class="col mb-2">
                                            <button class="button">
                                                <img src={couple} style={{ width: "2rem" }} />
                                                <span data-title="UNMARRIED">MARITAL  STATUS</span>
                                            </button>
                                        </div>
                                        <div class="col mb-2">
                                            <button class="button">
                                                <img src={house} style={{ width: "2rem" }} />
                                                <span data-title="INDIAN">NATIONALITY</span>
                                            </button>
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
export default Intro