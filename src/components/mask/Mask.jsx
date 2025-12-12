import React from "react";
import maskImage from "../../assets/images/crt_green_mask.png";
import "./mask.css";

const Mask = () => {
  return (
    <div 
      className="mask-overlay"
      style={{
        backgroundImage: `url(${maskImage})`
      }}
    ></div>
  );
};

export default Mask;

