import React from "react";
import "./setbudgetinput.css";


 const SetBudgetInput = (props) => (
 <div>
 <form>
 	<div className="input-class">
 		<input
 		className="set-budget-input input-group"
 		type="text"
 		name="budgetVal"
 		value={props.budget}
 		onChange={props.handleInputChange_budget}
 		placeholder=" Enter Budget"
 		required
 		/>
 	</div>

</form>

</div>
);

export default SetBudgetInput;
