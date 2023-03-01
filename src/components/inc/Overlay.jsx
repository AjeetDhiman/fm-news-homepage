import React from "react";

function Overlay(props) {
  const classes =
    "bg-[#000] opacity-70 w-full h-screen fixed top-0 left-0 z-10 lg:hidden transition-all duration-300 delay-500 " +
    props.className;
  return <div className={classes}></div>;
}

export default Overlay;
