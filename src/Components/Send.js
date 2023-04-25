import '../Assets/Style/send.css'
const Send = (props) => {
    return (
        <>
            <input type="checkbox" name="send" id="send" onClick={props.onClick()} />
            <label for="send" class="send">
                <div class="rotate">
                    <div class="move">
                        <div class="part left"></div>
                        <div class="part right"></div>
                    </div>
                </div>
            </label>
        </>
    )
}

export default Send