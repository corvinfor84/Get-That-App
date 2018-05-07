import React from "react";
import "./setbudgetbtn.css";

 const SetBudgetBtn = (props) => (
 	<button type="button" className="btn btn-outline-light btn-sm set-budget-btn" onClick={props.addBudget}>{props.btnName}</button>
			
);

export default SetBudgetBtn;