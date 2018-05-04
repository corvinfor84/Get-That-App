import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import StatBlock from "../../components/StatBlock";
import UserChart from "../../components/UserChart";
import SearchPanel from "../../components/SearchPanel";
import { Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import CircularProgressbar from 'react-circular-progressbar';
import "./style.css";
import eye from "../../components/images/eye.png";
import budget from "../../components/images/budget.png";
import cart from "../../components/images/cart.png";
import sum from "../../components/images/sum.png";
import defaultProfilePic from "../../components/images/default-profile.png";

let totalPurchases = "Sum of Purchases";
let totalPurchPercent = "Purchase Budget";
let watchedSum = "Sum of Watched Items";
let watchedSumPercent = "Watched Budget";
let dummyname = "John Smith";
 

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
					amount={89}
					progress={<CircularProgressbar percentage={[11]} initialAnimation={true}/>}
					icon={cart}
					/>
					<StatBlock
					title={totalPurchPercent}
					amount={1838}
					progress={<CircularProgressbar percentage={20} initialAnimation={true}/>}
					icon={budget}
					/>
					<StatBlock
					title={watchedSum}
					amount={489}
					progress={<CircularProgressbar percentage={87} initialAnimation={true}/>}
					icon={sum}
					/>
					<StatBlock
					title={watchedSumPercent}
					amount={1360}
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