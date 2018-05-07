import React from "react";
import "./chart.css";

 const UserChart = (props) => (
 
			<div className="col-lg bg-secondary user br-edges">
				<div className="col-sm left-user-panel">
					<img src={props.userPicture} alt="user image" className="user-image-pic img-thumbnail"/>
						<div className="user-name"><strong>{props.username}</strong></div>
							<div className="set-budget">{props.setBudget}</div>
								<div className="setBudgetBtn">{props.BudgetBtn}
									<span>{props.clearBudget}</span>
								</div>
									<div className="search-item">{props.searchItem}</div>
										<div className="searchBtn">{props.searchItemBtn}
											<span>{props.clearSearch}</span>
										</div>
									
				</div>
											<div className="show-search">
												<div className="show-search-container">
														{props.showSearch}
												</div>
											</div>
																
												{props.children}					
			</div>

);

export default UserChart;