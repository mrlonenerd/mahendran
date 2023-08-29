import Landing_Page from "./Components/landing";
import Intro from "./Components/intro";
import Summary from "./Components/Summary";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contactme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/intro" element={<Intro />} />
          <Route path="/about" element={<Summary />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={< Certifications />} />
          <Route path="/bye" element={<Contact />} />
          <Route path="/education" element={<Education />} />

          <Route path="/" element={<Landing_Page />} />

        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App;
