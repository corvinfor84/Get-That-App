import React from "react";
import "./nav.css";

let showIt = false;

let show = () => {

	showIt ? showIt = false : showIt = true;
	// document.getElementsByClassName(".more").style.display = 'block';
	console.log("clicking");
}

 const Nav = (props) => (	 
	 	<div className="container">
	 		<div className="our-nav" onClick={show}>

	 		</div>	
	 		<div className="more-nav" style={{display: showIt ? 'block' : 'none' }}></div>
	 	</div>
);

export default Nav;