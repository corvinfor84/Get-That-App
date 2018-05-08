import React from "react";
import "./searchitembtn.css";

 const SearchItemBtn = (props) => (
 	<button onClick={props.searched} type="button" className="btn btn-outline-light btn-sm search-item-btn">{props.label}</button>
			
);

export default SearchItemBtn;