import React from "react";
import "./itemcard.css";

 const ItemCard = (props) => (
 
			<div className="item-block">
				<img src={props.itemImage} alt="item image" className="image-block"/>
					<div className="item-title"><strong>Title: </strong>{props.title}</div>
						<div className="item-price"><strong>Price: </strong>{props.price}</div>
							<div className="item-watch">{props.watchBtn}</div>
								<div className="item-buy">{props.buyBtn}</div>
	
			</div>	

);

export default ItemCard;