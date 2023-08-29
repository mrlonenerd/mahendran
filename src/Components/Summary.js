import summary from "../Assets/Image/sumry.png";
import "../Assets/Style/card.css";

const Summary = () => {

    return (
        <>
           
            <div class="px-5">
                <div class="container">
               
                    <div class="row">
                        <div class="col-md-7 text-center">
                           
                            <p class="text-wrap skillspara" id="/about" >
                            <h2  class="h5 text-center" >Summary</h2>
                            <br/>
                            Welcome to my portfolio! I am a passionate and dedicated web developer with two years of hands-on experience in crafting dynamic and user-centric web applications.
                             My expertise lies in harnessing the power of JavaScript, HTML, CSS, and ReactJS, NodeJS, MongoDB, and basics of SQL and ExpressJS to create seamless and engaging digital experiences.
                        
                            </p>
                        </div>
                        <div class="col text-end">
                           
                             <img src={summary} alt="" class="img-fluid"  style={{width:"300px"}}  />

                            
                           
                        </div>
                    </div>
                </div>
               
            </div>
           
        </>
    )
}

export default Summary;