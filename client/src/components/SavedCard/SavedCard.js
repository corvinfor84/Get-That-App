import React from "react";
import "./savedcard.css";


 const SavedCard = (props) => (
 	<div id="saved-menu">
			<img src={props.savedImage} className="saved-item-image" alt="saved-item-to-calculate"/>
			<div className="saved-price">{props.savedprice}</div>
			<p className="saved-title">{props.savedTitle}</p>

	</div>

);

export default SavedCard;
