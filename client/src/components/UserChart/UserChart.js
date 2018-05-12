import React from "react";
import "./chart.css";

 const UserChart = (props) => (
			<div className="col-lg bg-secondary user br-edges">
				<div className="col-sm left-user-panel">

          <img src={props.userPicture} alt="Profile" className="user-image-pic img-thumbnail"/>
					<div className="user-name">
            <strong>{props.username}</strong>
          </div>

          <div className="searchBtn">
            <form>
              <div className = "form-group">
                <input
                  className = "form-control"
                  id="keyword"
                  type="text"
                  value={props.keyword}
                  placeholder="search"
                  name = "keyword"
                  onChange={props.handleInputChange}
                  required
                  />
                </div>
                <div className="pull-right">
                  <button
                    onClick={props.handleSearch}
                    type="submit"
                    className="btn btn-lg btn-danger"
                  >
                    Search
                  </button>
                </div>
              </form>
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
