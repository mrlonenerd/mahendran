import "../Assets/Style/Landing.css";
import Intro from "../Components/intro";
import Navbar from "../Components/Navbar";
import Summary from "./Summary";
import Experience from "../Components/Experience";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Certifications from "../Components/Certifications";
import Contact from "./Contactme";
import { useEffect, useState } from "react";
import RocketButton from "../Components/Rocketbutton";
import { ModebtnAtom } from "../Components/Navbar";
import { atom, useAtom } from "jotai";
import DarkmodeSummry from "../Components/Summry2";
import { Button } from "react-scroll";
import DarkmodeSkills from "./DarkmodeSkills";
import DarkmodeExperience from "../Components/Expericencedark";
import Navbar2 from "./Navbar2";
const Landing_Page = () => {
  const [buttonbackcolor, setButtonBackColor] = useAtom(ModebtnAtom);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <>
      <div class="landinpage">
        <Navbar />

        <br />
        <Intro />

        {buttonbackcolor == false ? <DarkmodeSummry /> : <Summary />}

        {buttonbackcolor == false ? <DarkmodeExperience /> : <Experience />}

        {buttonbackcolor == false ? "" : <Education />}

        {buttonbackcolor == false ? <DarkmodeSkills /> : <Skills />}

        <br />
        <br />

        <br />

        {showButton && (
          <div class="d-flex justify-content-end">
            <RocketButton onClick={scrollToTop} className="back-to-top" />
          </div>
        )}

        <Contact />
      </div>
    </>
  );
};

export default Landing_Page;
