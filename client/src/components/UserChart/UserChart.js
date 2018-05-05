import React from "react";
import "./chart.css";

 const UserChart = (props) => (
 
			<div className="col-md bg-secondary user br-edges">
				<div className="col-sm left-user-panel">
					<img src={props.userPicture} className="user-image-pic img-thumbnail"/>
						<h4 className="user-name"> {props.username} </h4>
							<div className="set-budget">{props.setBudget}</div>
								<div className="setBudgetBtn">{props.BudgetBtn}
									<span>{props.clearBudget}</span>
								</div>
									<div className="search-item">{props.searchItem}</div>
										<div className="searchBtn">{props.searchItemBtn}
											<span>{props.clearSearch}</span>
										</div>
									
				</div>
										<div className="show-search">{props.showSearch}</div>
											<div className="aGraph">{props.graph}</div>					
												{props.children}					
			</div>

);

export default UserChart;