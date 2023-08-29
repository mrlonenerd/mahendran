import "../Assets/Style/send.css";
import React, { useState } from "react";
const Send = ({ sendemail }) => {
  const [flying, setFlying] = useState(false);

  const handleFlyClick = () => {
    setFlying(true);
    sendemail();
    setTimeout(() => {
      setFlying(false);
    }, 5400);
  };
  return (
    <div className="conatiner">
      <button
        type="submit"
        className={`mail-btn ${flying ? "fly" : ""}`}
        onClick={()=>handleFlyClick}
        onTouchStart={handleFlyClick}
      >
        send
      </button>
    </div>
  );
};

export default Send;
