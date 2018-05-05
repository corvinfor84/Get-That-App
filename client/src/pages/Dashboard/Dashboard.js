import React, { Component } from "react";
import { Link } from "react-router-dom";
// Component Imports
import Wrapper from "../../components/Wrapper";
import { Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import StatBlock from "../../components/StatBlock";
import UserChart from "../../components/UserChart";
import SearchPanel from "../../components/SearchPanel";
import SetBudgetBtn from "../../components/SetBudgetBtn";
import SetBudgetInput from "../../components/SetBudgetInput";
import SetBudgetBtnClear from "../../components/SetBudgetBtnClear";
import SearchItemInput from "../../components/SearchItemInput";
import SearchItemBtn from "../../components/SearchItemBtn";

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

// StatBlock Component - Header/Title text
let totalPurchases = "Sum of Purchases";
let totalPurchPercent = "Purchase Budget";
let watchedSum = "Sum of Watched";
let watchedSumPercent = "Watched Budget";
// Dummy Data - Discard when done!!!
let dummyname = "John Smith";
let randNum = "$96.45";
let randNum1 = "$1129.63";
let randNum2 = "$343.12";
let randNum3 = "$2396.66";
let moneySign = "$";

class Dashboard extends Component {
	state = {
		items: [],
		watching: [],
		purchased: [],

	}

	
	render() {
		return (
		<Wrapper>
			<Nav />
			<Container>
				<Row>
					<StatBlock
					title={totalPurchases}
					amount={randNum}
					progress={<CircularProgressbar percentage={11} initialAnimation={true}/>}
					icon={cart}
					/>
					<StatBlock
					title={totalPurchPercent}
					amount={randNum1}
					progress={<CircularProgressbar percentage={20} initialAnimation={true}/>}
					icon={budget}
					/>
					<StatBlock
					title={watchedSum}
					amount={randNum2}
					progress={<CircularProgressbar percentage={87} initialAnimation={true}/>}
					icon={sum}
					/>
					<StatBlock
					title={watchedSumPercent}
					amount={randNum3}
					progress={<CircularProgressbar percentage={46} initialAnimation={true}/>}
					icon={eye}
					/>
				</Row>
			</Container>
			<Container>
				<Row>
					<UserChart 
					userPicture={defaultProfilePic}
					username={dummyname}
					setBudget={<SetBudgetInput
						dollar={moneySign}
						/>}
					clearBudget={<SetBudgetBtnClear />}
					BudgetBtn={<SetBudgetBtn />}
					searchItem={<SearchItemInput />}
					searchItemBtn={<SearchItemBtn />}
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