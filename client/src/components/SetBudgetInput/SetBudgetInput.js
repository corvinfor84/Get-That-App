import React from "react";
import "./setbudgetinput.css";

const PushData = (e) => {
	// e.preventDefault();
	let formValue = e.target.name.value;
	console.log("connected");
	console.log(formValue);
}
 const SetBudgetInput = (props) => (
 <div>
 <form>
 	<div className="input-class">
 		<input 
 		type="text" 
 		className="set-budget-input input-group" 
 		name="toys" 
 		value={props.budgetVal}
 		placeholder=" Enter budget"
 		/>
 	</div>
 	<div className="button-row">
		<button
		onClick={PushData}
		type="button" 
		className="btn btn-outline-light btn-sm set-budget-btn" 
		>
			{props.btnName1}
		</button>
	</div>
</form>
			<button 
			onClick={props.removeBudget}
			type="button" 
			className="btn btn-outline-light btn-sm set-budget-btn-clr" 
			>
				{props.btnName}
			</button>
</div>
);

export default SetBudgetInput;