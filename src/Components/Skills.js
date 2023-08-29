import cool from "../Assets/Image/Skills.png";
import { ModebtnAtom } from "../Components/Navbar";
import { atom, useAtom } from "jotai";
import DarkmodeSkills from "./DarkmodeSkills";
const Skills = () => {
  const [buttonbackcolor, setButtonBackColor] = useAtom(ModebtnAtom);
  return (
    <>
      <div class="container" id="/skills">
        <div class="row pb-5 pt-5">
          <div class="col-md-4  d-flex justify-content-center">
           
              <img src={cool} class="img-fluid justify-content-center w-50" />
         
          </div>

          <div class="col-md-8  d-flex justify-content-center">
            {buttonbackcolor == false ? (
              <DarkmodeSkills />
            ) : (
              <div class="example  justify-content-center">
                Skills
                <br />
                &amp;
                <br />
                certifications
              </div>
            )}
          </div>
        </div>
        {buttonbackcolor == false ? null : (
          <div class="container pt-5">
            <div class="card " style={{ width: "80vw" }}>
              <div class="row ">
                <div class="col d-flex justify-content-center">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img
                          src="https://learnbatta.com/assets/images/javascript/javascript-logo.png"
                          alt="Avatar"
                          style={{ width: "250px", height: "250px" }}
                        />
                      </div>
                      <div class="flip-card-back p-3">
                        <p>
                          <h6>
                            <b>
                              <h5>Summary:</h5>
                            </b>
                            I am a passionate JavaScript enthusiast with a deep
                            understanding of this versatile programming
                            language.
                          </h6>
                        </p>
                        <b class="text-dark">Total Experience: 2 Years</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col  d-flex justify-content-center">
                  <div class="flip-card1">
                    <div class="flip-card-inner1">
                      <div class="flip-card-front1">
                        <img
                          src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
                          alt="Avatar"
                          style={{
                            width: "250px",
                            height: "250px",
                            border: "2px solid white",
                          }}
                        />
                      </div>
                      <div class="flip-card-back1 p-3">
                        <h6>
                          <b>
                            <h5>Summary:</h5>
                          </b>
                          I've successfully transformed concepts into practical
                          solutions. My expertise in component-based development
                          empowers me to create reusable, efficient, and
                          well-organized UI components.
                        </h6>

                        <b class="text-dark">Total Experience: 1.5 Years</b>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col  d-flex justify-content-center">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img
                          src="https://www.simplilearn.com/ice9/course_images/bundle313x225/NodeJS.svgz"
                          alt="Node JS"
                          style={{ width: "250px", height: "250px" }}
                        />
                      </div>

                      <div class="flip-card-back1 p-3">
                        <p>
                          <h6>
                            <b>
                              <h5>Summary:</h5>
                            </b>
                            My journey with Node.js has equipped me with the
                            skills to create efficient, high-performance, and
                            real-time server side web solutions.
                          </h6>
                        </p>

                        <b class="text-dark">Total Experience: 2 Years</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* #3 */}
              <div class="row">
                <div class="col  d-flex justify-content-center">
                  <div class="flip-card ">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img
                          src="https://blog.goorm.io/wp-content/uploads/2022/07/%EC%8D%B8%EB%84%A4%EC%9D%BC.png"
                          alt="MongoDB"
                          style={{ width: "250px", height: "250px" }}
                        />
                      </div>
                      <div class="flip-card-back1 p-3">
                        <p>
                          <h6>
                            <b>
                              <h5>Summary:</h5>
                            </b>
                            I am aware of MongoDB with a understanding of this
                            versatile NoSQL database technology. With a focus on
                            data flexibility and scalability.
                          </h6>
                        </p>

                        <b class="text-dark">Total Experience: 1.5 Years</b>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col  d-flex justify-content-center">
                  <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBK3XsIUdVuDfkBDnc7kwD3iiOQZ009wUkQ&usqp=CAU"
                          alt="Avatar"
                          style={{ width: "250px", height: "250px" }}
                        />
                      </div>
                      <div class="flip-card-back p-3">
                        <p>
                          <h6>
                            <b>
                              <h5>Summary:</h5>
                            </b>
                            I've Good knowledge of Docker,where i create Docker
                            containers and images and make them platform
                            independent and easy understanding.
                          </h6>
                        </p>
                        <b class="text-dark">Total Experience: 6 to 8 months</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col  d-flex justify-content-center">
                  <div class="flip-card1 ">
                    <div class="flip-card-inner1">
                      <div class="flip-card-front1">
                        <img
                          src="https://media.licdn.com/dms/image/D5612AQG6MIemt0irBQ/article-cover_image-shrink_720_1280/0/1683287402378?e=2147483647&v=beta&t=V7Qm4U2JHtC7nq8dppKtXE6N_5a_zRo5gDRycTGD9jQ"
                          alt="Avatar"
                          style={{
                            width: "250px",
                            height: "250px",
                            border: "2px solid white",
                          }}
                        />
                      </div>
                      <div class="flip-card-back1 p-3">
                        <h6>
                          <b>
                            <h5>Summary:</h5>
                          </b>
                          I am proficient in the fundamentals of SQL (Structured
                          Query Language), a cornerstone of database management.
                        </h6>
                        <b class="text-dark">Total Experience: 6 months</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
