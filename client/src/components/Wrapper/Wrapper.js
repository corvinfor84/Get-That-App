import React from "react";
import "./wrapper.css";

 const Wrapper = (props) => (
 
			<div className="theWrapper">
				{props.children}

			</div>

);

export default Wrapper;