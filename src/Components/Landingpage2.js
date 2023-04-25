import '../Assets/Style/LandingPage2.css';
import { useHorizontalScroll } from "./scrollbtn";
const DarkModeLandding = () => {
    const scrollRef = useHorizontalScroll();
    return (
        <>
       <div  ref={scrollRef}  >
            <div class="background-container">
                <div class="stars"></div>
                <div class="twinkling"></div>
                <div class="clouds"></div>
            </div>

          
          
            </div>
        </>
    )

}
export default DarkModeLandding;