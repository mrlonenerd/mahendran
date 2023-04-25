import skills from "../Assets/Image/skill.png";
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
                            With 2 years of experience as a software developer, I specialize in blockchain development using Ethereum, Hyperledger, Hardhat, and Solidity, as well as full-stack web application development using ReactJS, NodeJS, MongoDB, SQL, and Express JS. My expertise in these technologies is complemented by strong debugging and reverse engineering skills, allowing me to troubleshoot and optimize code with precision. Whether working independently or as part of a team, I am dedicated to delivering high-quality software solutions that meet business objectives and exceed user expectations.
                            </p>
                        </div>
                        <div class="col text-end">
                           
                             <img src={skills} alt="" class="img-fluid"  />

                            
                           
                        </div>
                    </div>
                </div>
               
            </div>
           
        </>
    )
}

export default Summary;