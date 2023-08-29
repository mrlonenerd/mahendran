import { useState, useRef, useEffect } from "react";
import "../Assets/Style/contact.css";
import Send from "../Components/Send";
import emailjs from "@emailjs/browser";
import facebook from "../Assets/Image/facebook.png";
import { Link, animateScroll as scroll } from "react-scroll";
const Contact = () => {
  const form = useRef();
  const button = useRef();
  const [fade, setFade] = useState(false);

  const [Formval, setFormval] = useState({
    name: "",
    email: "",
    message: "",
  });
  const Inputhandler = (e) => {
    e.preventDefault();
    setFormval({ ...Formval, [e.target.name]: e.target.value });
  };

  const sendemail = (e) => {
    emailjs
      .sendForm(
        "service_pos93uv",
        "template_1c9c33b",
        form.current,
        "fJikv5GDvYC8OjxGe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      e.preventDefault();
      window.location.reload(false);
    }, 7000);
  };

  //////////////////////////stack////////////////////////

  const triggerFade = () => {
    setFade((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <section id="contact">
        <h1 class="section-header">Contact</h1>

        <div class="contact-wrapper">
          <form
            id="contact-form"
            class="form-horizontal"
            role="form"
            ref={form}
          >
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control textfild"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value={Formval.name}
                  onChange={Inputhandler}
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control textfild"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={Formval.email}
                  onChange={Inputhandler}
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <textarea
                  class="form-control textfild"
                  value={Formval.message}
                  rows="10"
                  placeholder="MESSAGE"
                  name="message"
                  onChange={Inputhandler}
                  required
                ></textarea>
              </div>
            </div>

            <div class="col-sm-12">
              {Formval.name == "" ||
              Formval.email == "" ||
              Formval.message == "" ? (
                <div>
                  <div
                    onAnimationEnd={triggerFade}
                    className={fade ? "fadedClass" : "visibleClass"}
                  ></div>
                  <button class="Beforebtn" onClick={triggerFade}>
                    Send
                  </button>
                </div>
              ) : (
                <Send sendemail={sendemail} />
              )}
            </div>
          </form>

          {/* /////////////////////////////////// */}

          <div class="direct-contact-container">
            <div class="container">
              <div class="row">
                <div class="col-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/819/819814.png"
                    style={{ width: "2rem" }}
                  />
                </div>
                <div class="col">
                  <h6 class="contact-text ">Jogeshwari, Mumbai</h6>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3014/3014736.png"
                    style={{ width: "2rem" }}
                  />
                </div>
                <div class="col">
                  <h6 class="contact-text ">(91) 9892870026</h6>
                </div>
              </div>

              <div class="row">
                <div class="col-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
                    style={{ width: "2rem" }}
                  />
                </div>
                <div class="col">
                  <h6 class="contact-text">tripathishalini789@</h6>
                </div>
              </div>
            </div>
            <hr />
            <ul class="social-media-list">
              <li>
                <a
                  href="https://github.com/Tripathi-Shalini"
                  class="contact-icon"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                    style={{ width: "2.5rem" }}
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://in.linkedin.com/in/shalini-tripathi-148622284"
                  target="_blank"
                  class="contact-icon"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                    style={{ width: "2.5rem" }}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/tripathi._.shalini?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  class="contact-icon"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4103/4103007.png"
                    style={{ width: "2.5rem" }}
                  />
                </a>
              </li>
              <li>
                <a href="" target="_blank" class="contact-icon">
                  <img src={facebook} style={{ width: "2.5rem" }} />
                </a>
              </li>
            </ul>
            <hr />

            <ul class="linkui">
              <li class="list-inline-item">
                <Link
                  className="footerlink"
                  to="/"
                  smooth={true}
                  duration={150}
                >
                  Home
                </Link>
              </li>
              <li class="list-inline-item">
                <Link
                  className="footerlink"
                  to="/about"
                  smooth={true}
                  duration={150}
                >
                  About
                </Link>
              </li>
              <li class="list-inline-item">
                <Link
                  className="footerlink"
                  to="/experience"
                  smooth={true}
                  duration={150}
                >
                  Experience
                </Link>
              </li>
              <li class="list-inline-item">
                <Link
                  className="footerlink"
                  to="/experience"
                  smooth={true}
                  duration={150}
                >
                  Qualification
                </Link>
              </li>
              <li class="list-inline-item">
                <Link
                  className="footerlink"
                  to="/skills"
                  smooth={true}
                  duration={150}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
