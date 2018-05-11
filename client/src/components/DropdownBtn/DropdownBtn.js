import React from "react";
import "./dropdownbtn.css";

 const DropdownBtn = (props) => (
 
			<div className="dropdown">
			  <button className="btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    {`Purchase in`}
			  </button>
			  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
			    <a className="dropdown-item" href="#">7 days</a>
			    <a className="dropdown-item" href="#">14 days</a>
			    <a className="dropdown-item" href="#">30 days</a>
			    <a className="dropdown-item" href="#">60 days</a>
			    <a className="dropdown-item" href="#">90 days</a>
			    <a className="dropdown-item" href="#">180 days</a>
			    <a className="dropdown-item" href="#">365 days</a>
			  </div>
			</div>

);

export default DropdownBtn;