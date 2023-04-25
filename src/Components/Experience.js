import fly from "../Assets/Image/fly.png";
import List from "../Components/List";
import { ModebtnAtom } from "../Components/Navbar";
import { atom, useAtom } from 'jotai';
import exp from "../Assets/Image/exp.png";
import DarkmodeExperience from "./Expericencedark"
const Experience = () => {
    const [buttonbackcolor, setButtonBackColor] = useAtom(ModebtnAtom)
    return (
        <>
            <div class="container pt-5" id="/experience">
                <div class="">
                    <div class="row d-felx justify-content-center">
                        <div class="col-md-3" >
                            {buttonbackcolor == false ?
                            
                                ''
                                :
                                <img src={fly} alt="" class="img-fluid " />

                            }

                        </div>
                        <div class="col">

                            <div class="d-flex justify-content-center">

                                <div class="pt-5 text-center">
                                    <h2 class="h5" >Experience</h2>
                                    <h6 class="h2 pt-2">Fullstack Software Developer</h6>
                                    <span class="h6">2+ Years OF Experince In Rapidqube Digital Solutions Pvt Ltd Chennai</span>

                                </div>


                            </div>




                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col">
                        {buttonbackcolor == false
                            ?
                            null
                            :
                            <List />
                        }

                    </div>



                </div>

            </div>
        </>
    )
}

export default Experience;
