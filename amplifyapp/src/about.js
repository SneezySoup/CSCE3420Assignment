import React from "react";
import './navbars/navbar.css';

function About() {
  return(
  <body>
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="about.html">About Me</a>
      <div class="dropdown">
        <button class="dropbtn">Dropdown 
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/#">Link 1</a>
          <a href="/#">Link 2</a>
          <a href="/#">Link 3</a>
        </div>
      </div> 
    </div>

    <h3>Sneezy Soup About Me</h3>
    <p></p>

  </body>
  )
}