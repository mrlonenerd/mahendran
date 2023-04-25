import '../Assets/Style/Darkmode.css';

const Darkmodebutton = (props) => {
    return (
        <>
            <input type="checkbox" id="toggle_checkbox" onClick={props.onClick} class={props.class} />

               <label for="toggle_checkbox">
                <div id="star">
                    <div class="star" id="star-1">★</div>
                    <div class="star" id="star-2">★</div>
                </div>
                <div id="moon"></div>
            </label>
        </>
    )
}

export default Darkmodebutton;