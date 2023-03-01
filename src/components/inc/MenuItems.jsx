import React from "react";

function MenuItems(props) {
  const classes = props.className;
  return (
    <ul className={classes}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  );
}

export default MenuItems;
