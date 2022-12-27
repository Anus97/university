import React from 'react'
function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <a href="#home" className="active">Home</a>
      <a href="#news">Sign Up</a>
      <a href="#contact">Login</a>
        <div className="dropdown">
          <button className="dropbtn">University/Admissions 
          <i className="fa fa-caret-down"></i>
        </button>
    <div className="dropdown-content">
      <a href="#">Admissions</a>
      <a href="#">University List</a>
      <a href="#">Colleges</a>
    </div>
  </div> 
  <a href="#about">About</a>
</div>
  )
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}

export default Navbar
