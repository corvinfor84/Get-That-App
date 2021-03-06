import React from "react";
import "./nav.css";
// import menu from "../images/menu.png";

let showIt = false;

let show = () => {
	var x = document.getElementById("drop-nav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

const logMessage = "welcome, ";

 const Nav = (props) => (
	 	<div className="container">
	 		<div className="our-nav">
	 			<div className="menu-icon" onClick={show}><i className="material-icons">menu</i></div>
	 				<div className="logged-in">{logMessage} {props.username}</div>
	 					<img src={props.getThatLogo} className="get-that-logo"/>
	 						<div className="budget">Budget: {props.userBudget}</div>

	 		</div>
	 		<div className="more-nav" id="drop-nav" style={{display: showIt ? 'block' : 'none' }}>
	 			<div className="logout-button">{props.logoutbtn}</div>
	 		</div>
	 	</div>
);

export default Nav;
