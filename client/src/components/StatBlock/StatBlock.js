import React from "react";
import "./StatBlock.css";

 const StatBlock = (props) => (

			<div className="col-sm bg-secondary info-quad br-edges text-center">
				<h6>{props.title}</h6>
				<h5>{props.amount}</h5>
				<div className="proBar">{props.progress}</div>
				<img src={props.icon} alt = "" className="icon-img"/>
			</div>

);

export default StatBlock;
