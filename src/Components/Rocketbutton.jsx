import "../Assets/Style/Landing.css";
const RocketButton = (props) => {
    return (
        <>

          <button onClick={props.onClick} class={props.className} >
          <div className="loader" >
                <div className="rocket">
                    <div className="dot">
                        <i className="fas fa-rocket" />
                        <i className="fas fa-cloud" style={{ "--i": "0" }} />
                        <i className="fas fa-cloud" style={{ "--i": "1" }} />
                        <i className="fas fa-cloud" style={{ "--i": "2" }} />
                        <i className="fas fa-cloud" style={{ "--i": "3" }} />
                        <i className="fas fa-cloud" style={{ "--i": "4" }} />
                        <i className="fas fa-cloud" style={{ "--i": "5" }} />
                    </div>
                </div>
                <span><i /></span>
            </div>
          </button>
        </>
    )
}

export default RocketButton;