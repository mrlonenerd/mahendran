import "../Assets/Style/Navbar2.css";
import { Link, animateScroll as scroll } from "react-scroll";
import mahi from "../Assets/Image/Fotor_AI (2).png";
import Darkmodebutton from "../Components/Darkmode";
import {  useEffect } from "react";
import { atom, useAtom } from 'jotai'

export const ModebtnAtom = atom(localStorage.getItem('DarkMode'))

const Navbar2 = () => {
    const [Darkmode, setDarkmode] = useAtom(ModebtnAtom)
    var element = document.body;
    const checkDarkmode = (Dark) => {
        if (Dark == false) {
            element.classList.add("dark-theme");
        }
        else{
            element.classList.remove("dark-theme")
        }
    }
    const onButtonClick = () => {
        localStorage.setItem('DarkMode', !Darkmode);
        setDarkmode(!Darkmode);
        console.log("value comiing", Darkmode)
    }

    useEffect(() => {
        checkDarkmode(Darkmode);
    }, [Darkmode]);
    return (
        <>
            <nav class="navbar sticky-top navbar-expand-lg ">
                <div class="container">
                    <a class="navbar-brand"> <img src={mahi} alt="profile" class="profile image-fluid" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto w-100 justify-content-end gap-2">
                            <li class="nav-item active">
                                <a class="nav-link2" id="navlink2"> <Link to="/about" smooth={true} duration={150}>ABOUT</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link2" id="navlink2"><Link to="/skills">SKILLS / CERTIFICATIONS</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link2" id="navlink2"><Link to="/experience" smooth={true} duration={150}>EXPERIENCE  </Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link2" id="navlink2"><Link to="contact" smooth={true} duration={150}>CONTACT </Link></a>
                            </li>
                            <Darkmodebutton onClick={onButtonClick} />


                        </ul>
                    </div>

                </div>
            </nav >

        </>
    )
}

export default Navbar2