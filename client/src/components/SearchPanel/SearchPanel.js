import React from "react";
import "./search.css";

 const SearchPanel = (props) => (
 
			<div className="col-md bg-secondary br-edges ml-auto searchPanel">
				
				<div className="lookUp">{props.search}</div>

			</div>	

);

export default SearchPanel;