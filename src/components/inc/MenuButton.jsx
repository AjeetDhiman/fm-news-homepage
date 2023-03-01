import React from "react";

function MenuButton({ className, customFunc, children }) {
  const classes = "w-10 h-10 " + className;

  return (
    <button className={classes} onClick={customFunc}>
      {children}
    </button>
  );
}

export default MenuButton;
