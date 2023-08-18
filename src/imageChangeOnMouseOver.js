import React from "react";
import ImageToggleOnMouseOver from "../src/imageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div className="mouse-change">
      {/* <img src="/static/speakers/black-white/speakers/Speaker-187.jpg" alt="" /> */}
      <ImageToggleOnMouseOver 
      primaryImg='/static/speakers/black-white/speakers/Speaker-187.jpg'
      secondaryImg='/static/speakers/Speaker-187.jpg'
    
    
    alt='' />
      &nbsp;&nbsp;&nbsp;
      {/* <img
        src="/static/speakers/black-white/speakers/Speaker-1124.jpg"
        alt=""
      /> */}
      <ImageToggleOnMouseOver
        primaryImg="/static/speakers/black-white/speakers/Speaker-1124.jpg"
        secondaryImg="/static/speakers/Speaker-1124.jpg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
