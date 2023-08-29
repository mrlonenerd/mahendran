import "../Assets/Style/list.css";
import crypto from "../Assets/Image/cryptocurrencies.png";
import blockchain from "../Assets/Image/blockchain.png";
import docker from "../Assets/Image/docker.png";
import node from "../Assets/Image/nodejs.png";
import land from "../Assets/Image/location-pin.png";
import talk from "../Assets/Image/comunication.png";
const List = () => {
    return (
        <>
            <div class="container">
                <ol class="row olcards">

                    <li style={{ backgroundColor: "#fc374e" }}>

                        <div class="content">
                            <div class="icon"><img src={crypto} style={{ width: '3rem' }} /></div>
                            <div class="title">Crypto Social Media App</div>
                            <div class="text">Work As Frontend And   Developer For 3 Months.</div>
                        </div>

                    </li>
           
         
            <li style={{ backgroundColor: "#162d59" }}>
                <div class="content">
                    <div class="icon"><img src={node} style={{ width: '3rem' }} /></div>
                    <div class="title">Elstriker</div>
                    <div class="text">Work As Frontend Developer With ReactJS, Formik and Bootstrap. </div>
                </div>
            </li>
            <li style={{ backgroundColor: "#f15f0e" }}>
                <div class="content">
                    <div class="icon"><img src={land} style={{ width: '3rem' }} /></div>
                    <div class="title">Land Registration</div>
                    <div class="text">Work As Fullstack Developer With  ReactJS, Jotai(Same as Redux) And Nodejs, Express JS And MongoDD.</div>
                </div>
            </li>
            <li style={{ backgroundColor: "#E7B10A" }}>
                <div class="content">
                    <div class="icon"><img src={docker} style={{ width: '3rem' }} /></div>
                    <div class="title">Git & Doker</div>
                    <div class="text">Work  As Devos, Deployed  And Dockerize Old Projects On Company Server. </div>
                </div>
            </li>
            <li style={{ backgroundColor: "#03C988" }}>
                <div class="content">
                    <div class="icon"><img src={talk} style={{ width: '3rem' }} /></div>
                    <div class="title">Communication</div>
                    <div class="text">Communication With Clients Requirement Gathering And Doing Enhancements. </div>
                </div>
            </li>
        </ol>
            </div >
        </>
    )
}

export default List;