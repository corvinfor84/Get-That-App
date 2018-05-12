import React, { Component } from "react";
import axios from "axios"; //don't need seperate utils/API...too much work and confusion
import qp from "query-parse";
//import { Link } from "react-router-dom";
// Component Imports
import Wrapper from "../../components/Wrapper";
import { Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import StatBlock from "../../components/StatBlock";
import UserChart from "../../components/UserChart";
import SearchPanel from "../../components/SearchPanel";
//import SetBudgetInput from "../../components/SetBudgetInput";
import SearchItemInput from "../../components/SearchItemInput";
import SearchItemBtn from "../../components/SearchItemBtn";
//import ShowSearchDisplay from "../../components/ShowSearchDisplayBox";
import ItemCard from "../../components/ItemCard";

// NPM/External Component Imports
import CircularProgressbar from 'react-circular-progressbar';
// CircularProgress Bar CSS
import "./style.css";
// image Imports
import eye from "../../components/images/eye.png";
import budget from "../../components/images/budget.png";
import cart from "../../components/images/cart.png";
import sum from "../../components/images/sum.png";
import defaultProfilePic from "../../components/images/default-profile.png";


// Dummy Data - Discard when done!!!
let dummyname = "Cornell";
let randNum = "$96.45";
let randNum1 = "$1129.63";
let randNum2 = "$343.12";
let randNum3 = "$2396.66";


class Dashboard extends Component {
	state = {
		items: [],
		purchases: [],
		keywords: "",
		budget: "",
		username: ""
	};

	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
	  };

	getResults = () => {
		axios.get("/api/purchase", {
			keywords: this.state.keywords
		})
			.then(res =>

				this.setState({
					items: res.data,
					message: !res.data.length
						? "No Items found under this search term"
						: ""
				})
			)
			.catch(err => console.log(err));
	};

	handleSearch = event => {
		event.preventDefault();
		this.getResults();
	}

watchAndCalculate = (value) => {
	// this function should add the item to the db and do the calculation. or contain a seperate function
   // inside this function that handles the calculation based on the value of which button was pressed.
   // THIS FUNCTION IS LINKED TO ITEM CARD WHICH IS NESTED INSIDE OF USERCHART.
   console.log("Watch & Calculate");
}

	render() {
		return (
		<Wrapper>
			<Nav
				userBudget={`$` + this.state.budget}
			/>
			<Container>
				<Row>
					<StatBlock
					title={`Sum of Purchases`}
					amount={randNum}
					progress={<CircularProgressbar percentage={11} initialAnimation={true}/>}
					icon={cart}
					/>
					<StatBlock
					title={`Purchase Budget`}
					amount={randNum1}
					progress={<CircularProgressbar percentage={20} initialAnimation={true}/>}
					icon={budget}
					/>
					<StatBlock
					title={`Sum of Watched`}
					amount={randNum2}
					progress={<CircularProgressbar percentage={87} initialAnimation={true}/>}
					icon={sum}
					/>
					<StatBlock
					title={`Watched Budget`}
					amount={randNum3}
					progress={<CircularProgressbar percentage={46} initialAnimation={true}/>}
					icon={eye}
					/>
				</Row>
			</Container>
			<Container>
				<Row>
					<UserChart
						handleInputChange = {this.handleInputChange}
						btnName={`Set Budget`}
						btnName1={`Clear Budget`}
						userPicture={defaultProfilePic}
						username={dummyname}
						keyword = {this.state.keyword}
						handleSearch = {this.handleSearch}


						searchItem={<SearchItemInput />}
						searchItemBtn={<SearchItemBtn
							label={`Search`}

							/>}
							showSearch={this.state.items.map((itemcomponent) =>
								<ItemCard
										key={itemcomponent.title}
										itemImage={itemcomponent.image}
										title={itemcomponent.title}
										price={`$` + itemcomponent.price}
										watchAndCalculate={this.watchAndCalculate}

								/>
							)}

					/>
				</Row>
			</Container>
			<Container>
				<Row>
					<SearchPanel />
				</Row>
			</Container>
		</Wrapper>
			);
	}
}

export default Dashboard;
