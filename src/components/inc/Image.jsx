import React from "react";

function Image(props) {
  return <img src={props.imgSrc} className={props.className} />;
}

export default Image;
