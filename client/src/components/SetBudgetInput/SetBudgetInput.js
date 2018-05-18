import React from "react";
import "./setbudgetinput.css";

const PushData = (e) => {
	// e.preventDefault();
	// let formValue = e.target.name.value;
	console.log("connected");
	// console.log(formValue);
}
 const SetBudgetInput = (props) => (
 <div>
 <form>
 	<div className="input-class">
 		<input
 		className="set-budget-input input-group"
 		type="text"
 		name="budgetVal"
 		value={props.bV}
 		onChange={props.handleInputChange_budget}
 		placeholder=" Enter Budget"
 		required
 		/>
 	</div>
 	
</form>
		
</div>
);

export default SetBudgetInput;
