import React from "react";
import "./nav.css";
import menu from "../images/menu.png";

let showIt = false;

let show = () => {
	var x = document.getElementById("drop-nav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

 const Nav = (props) => (	 
	 	<div className="container">
	 		<div className="our-nav">
	 			<img src={menu} className="menu-icon" onClick={show}/>
	 		</div>	
	 		<div className="more-nav" id="drop-nav" style={{display: showIt ? 'block' : 'none' }}></div>
	 	</div>
);

export default Nav;