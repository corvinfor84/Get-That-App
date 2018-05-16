import React from "react";
import "./itemcard.css";

 const ItemCard = (props) => (

			<div className="item-block">
				<img src={props.itemImage} alt="Look at this" className="image-block"/>
					<div className="item-title"><strong>Title: </strong><a href={props.link} target="_blank">{props.title}</a></div>
						<div className="item-price"><strong>Price: </strong>{props.price}</div>
									<div className="item-PB-btn">
										<button
										onClick={() => props.handlePurchaseSave7(props.title)}
										type="button"
										className="btn btn-outline-light btn-sm value-btn"
										value={`7`}
										>Purchase in 7 days</button>

										<button
										onClick={() => props.handlePurchaseSave14(props.title)}
										type="button"
										className="btn btn-outline-light btn-sm value-btn"
										value={`14`}
										>Purchase in 14 days</button>

										<button
										onClick={() => props.handlePurchaseSave30(props.title)}
										type="button"
										className="btn btn-outline-light btn-sm value-btn"
										value={`30`}
										>Purchase in 30 days</button>

									</div>

			</div>

);

export default ItemCard;
