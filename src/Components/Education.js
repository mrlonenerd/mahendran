import bag from "../Assets/Image/school-bag.png";
import "../Assets/Style/AList.css";
import degree from "../Assets/Image/university.png";
const Education = () => {
  return (
    <>
      <div class=" pt-5">
        <h2 class="text-center h5">Qualification</h2>
        <div class="container pt-4">
          <div class="row ">
            <div class="col d-flex justify-content-center mb-3">
              <button class="btn btn-bubble">
                Kala Vidya Mandir Engineering Collage{" "}
                <img
                  src={degree}
                  style={{ width: "2.5rem" }}
                  class="img-fluid"
                />{" "}
              </button>
            </div>
            <div class="col d-flex justify-content-center mb-3">
              <button class="btn btn-bubble">
                {" "}
                <img src={bag} style={{ width: "2.5rem" }} class="img-fluid" />
                K.C. College of Engineering & Management{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
