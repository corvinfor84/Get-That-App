import React from "react";
import "./chart.css";
import SetBudgetInput from "../SetBudgetInput";

 const UserChart = (props) => (

			<div className="col-lg bg-secondary user br-edges">
				<div className="col-sm left-user-panel">
					<img src={props.userPicture} alt="Profile" className="user-image-pic img-thumbnail"/>
						<div className="user-name"><strong>{props.username}</strong></div>
							<div className="set-budget">
								<SetBudgetInput
                  handleInputChange_budget={props.handleInputChange_budget}
                  bV = {props.bV}
								/>
							</div>
								<div className="setBudgetBtn">{props.BudgetBtn}
									<span>{props.clearBudget}</span>
								</div>

										<div className="searchBtn">
                    <form>
                      <div className="form-group">
                        <input
                          className="search-item-input input-group"
                          id="keyword"
                          type="text"
                          value={props.keyword}
                          placeholder=" Search / Shop"
                          name = "keyword" 
                          onChange={props.handleInputChange}
                          required
                          />
                        </div>

                  <button
                    onClick={props.handleSearch}
                    type="submit"
                    className="btn btn-outline-light btn-sm search-item-btn">
                    Submit
                  </button>
                </form>
										</div>

				                </div>
											<div className="show-search">
												<div className="show-search-container">
														{props.showSearch}
												</div>
											</div>
			</div>

);

export default UserChart;
