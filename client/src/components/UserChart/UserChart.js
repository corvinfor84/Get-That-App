import React from "react";
import "./chart.css";

 const UserChart = (props) => (
 
			<div className="col-md bg-secondary user br-edges">
				<div className="aGraph">{props.graph}</div>
				<img src={props.userPicture} className="user-image-pic"/>
				<h4 className="user-name"> {props.username} </h4>
					{props.children}
				
				
			</div>

);

export default UserChart;