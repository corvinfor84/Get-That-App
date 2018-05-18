import React, { Component } from "react";
import { Button } from 'react-bootstrap';
//import {Navbar, Button} from 'react-bootstrap';
//import { Link } from "react-router-dom";
// Component Imports

import Wrapper from "../../components/Wrapper";
import { Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import StatBlock from "../../components/StatBlock";
import UserChart from "../../components/UserChart";
import ItemCard from "../../components/ItemCard";
import SearchPanel from "../../components/SearchPanel";
import Carousel from "../../components/Carousel";
import SavedCard from "../../components/SavedCard";
import LogoButton from "../../components/LogoButton";
//import SearchItemInput from "../../components/SearchItemInput";
//import SearchItemBtn from "../../components/SearchItemBtn";
//import ShowSearchDisplay from "../../components/ShowSearchDisplayBox";
//import SetBudgetInput from "../../components/SetBudgetInput";

// NPM/External Component Imports
//don't need seperate utils/API...too much work and confusion
import CircularProgressbar from 'react-circular-progressbar';
import "../Dashboard/style.css";
import axios from "axios";
//import qp from "query-parse";

import eye from "../../components/images/eye.png";
import budget from "../../components/images/budget.png";
import cart from "../../components/images/cart.png";
import sum from "../../components/images/sum.png";
import defaultProfilePic from "../../components/images/default-profile.png";

class Home extends Component {
	constructor(props) {
		super()
		this.state = {
			temp : 100,
		  items: [], //this is from website
		  purchases: [], //this is from db
		  sortedPurchases: [], //not used
		  keyword: "", //this is from user
		  budget: 1000, //this is from user
		  username: "",
			amount1:0,
			amount2:0,
			amount3:0,
			amount4:0
		}
  };

  componentDidMount() {
		//here we are trying to get the name from auth0,
		//we need to put in a callback function because set state is asynchronous
		//therefore getting the database items for user to render should also be in cb function
		//refer to Auth.js getEmail
		this.props.auth.getEmail(
			(username) => {
				this.setState ({username:username});
				this.getSortedResults(username);
				this.getSavedResults(username);
				//this.getSum(this.state.sortedPurchases); //delete this later
				//this.get7day(this.state.sortedPurchases);
			}
		);
	  }


	handleUsername(){
		const username = this.props.auth.getEmail();
		this.setState({
			username: username
		})
	}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

//get results from web
getResults = () => {
console.log(this.state.keyword)
axios.get("/api/scrape", {params:{
  keyword: this.state.keyword
}})
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

//this is for search button, not working right now
handleSearch = event => {
event.preventDefault();
this.getResults();

}

//can save to db
handlePurchaseSave7 = title => {
const purchase = this.state.items.find(purchase => purchase.title === title);
purchase["username"] = this.state.username;
purchase["units"] = 7;
purchase["daily_save"] = purchase.price / 7;
axios.post("/api/purchases", purchase).then(res => {this.getSavedResults(this.state.username);});
console.log(purchase);
console.log(this.state.purchases);
};

//can save to db for 14
handlePurchaseSave14 = title => {
const purchase = this.state.items.find(purchase => purchase.title === title);
purchase["username"] = this.state.username;
purchase["units"] = 14;
purchase["daily_save"] = purchase.price / 14;
axios.post("/api/purchases", purchase).then(res => this.getSavedResults(this.state.username));
};

//can save to db for 30
handlePurchaseSave30 = title => {
const purchase = this.state.items.find(purchase => purchase.title === title);
purchase["username"] = this.state.username;
purchase["units"] = 30;
purchase["daily_save"] = purchase.price / 30;
axios.post("/api/purchases", purchase).then(res => this.getSavedResults(this.state.username));
console.log(purchase);
};

//get saved purchases for user from db
getSavedResults = (username) => {
console.log("state is " + this.state.username);
console.log("cb is " + username)
axios.get("/api/purchases/" + username)
  .then(res => {
    this.setState({
      purchases: res.data,
			amount1 : this.get7day(res.data),
			amount2: this.get14day(res.data),
			amount3: this.get30day(res.data),
			amount4: this.getSum(res.data)
    });

	}
  )
  .catch(err => console.log(err));
};

//this is not used right now
getSortedResults = (username) => {
axios.get("/api/purchases/sorted/" + username)
  .then(res =>
    this.setState({
      sortedPurchases: res.data
    })
  )
  .catch(err => console.log(err));
};


getSum = array => {
	let priceArray = [];
	for (let value of array) {
	    console.log(value);
	    priceArray.push(value.price);
	  }
	console.log(priceArray);
	let sum = 0;
	for(let value of priceArray){
	  sum = sum + value;
	  console.log(sum);
	}
	return(sum);
};


//undefined != config2.perc ? config2.perc : 0.50;
get7day = array => {
	let Array7 = [];

	for (let value of array) {
		if(value.units === 7){
	    Array7.push(value.price);
	  }
	}
	console.log(Array7);

	let sum = 0;
	for(let value of Array7){
	  sum = sum + value;
	  console.log(sum);
	}
	return(sum);
};

get14day = array => {
	let Array7 = [];

	for (let value of array) {
		if(value.units === 14){
	    Array7.push(value.price);
	  }
	}
	console.log(Array7);

	let sum = 0;
	for(let value of Array7){
	  sum = sum + value;
	  console.log(sum);
	}
	return(sum);
};

get30day = array => {
	let Array7 = [];

	for (let value of array) {
		if(value.units === 30){
	    Array7.push(value.price);
	  }
	}
	console.log(Array7);

	let sum = 0;
	for(let value of Array7){
	  sum = sum + value;
	  console.log(sum);
	}
	return(sum);
};

//handling budget////////////////////////////////////
//this is for budget input and saving it into a seperate state value
//no need for a value in the form props (don't know why)
handleInputChange_budget = event => {
	event.preventDefault();
  this.setState({
    budget: event.target.value
  });
};


login() {
	this.props.auth.login();
  }

logout() {
	this.props.auth.logout();
  }

	  render() {
		const { isAuthenticated } = this.props.auth;
		return (
		  <div className="container">
			{
			  isAuthenticated() && (
        <Wrapper>
          <Nav
				    username = {this.state.username}
				    userBudget={`$` + this.state.budget}
			    />
          <Button
            bsStyle="primary"
            className="btn-margin"
            onClick={this.logout.bind(this)}
          >
            Log Out
          </Button>
        <Container>
				<Row>
					<StatBlock
					title={`7 day Items`}
					amount={'$' + this.state.amount1.toFixed(2)}
					//amount={'$' + this.get7day(this.state.sortedPurchases).toFixed(2)}
					progress={<CircularProgressbar percentage={((this.state.amount1/this.state.budget)*100).toFixed(2)} initialAnimation={true}/>}
					icon={cart}
					/>
					<StatBlock
					title={`14 day Items`}
					amount={'$' + this.state.amount2.toFixed(2)}
					//amount={'$' + this.get14day(this.state.sortedPurchases).toFixed(2)}
					progress={<CircularProgressbar percentage={((this.state.amount2/this.state.budget)*100).toFixed(2)} initialAnimation={true}/>}
					icon={budget}
					/>
					<StatBlock
					title={`30 day Items`}
					amount={'$' + this.state.amount3.toFixed(2)}
					//amount={'$' + this.get30day(this.state.sortedPurchases).toFixed(2)}
					progress={<CircularProgressbar percentage={((this.state.amount3/this.state.budget)*100).toFixed(2)} initialAnimation={true}/>}
					icon={sum}
					/>
					<StatBlock
					title={`Watched Total`}
					amount={'$' + this.state.amount4.toFixed(2)}
					//amount={'$' + this.getSum(this.state.sortedPurchases).toFixed(2)}
					progress={<CircularProgressbar percentage={((this.state.amount4/this.state.budget)*100).toFixed(2)} initialAnimation={true}/>}
					icon={eye}
					/>
				</Row>
				<Row>
					<UserChart
						handleInputChange_budget = {this.handleInputChange_budget}
						handleInputChange = {this.handleInputChange}
						btnName={`Set Budget`}
						userPicture={defaultProfilePic}
						username={this.state.username}
						budget = {this.state.budget}
						//handleSetBudget = {this.handleSetBudget} //pushData
						keyword = {this.state.keyword}
						handleSearch = {this.handleSearch}

						showSearch={this.state.items.map(itemcomponent =>
								<ItemCard
										key = {itemcomponent.title}
										id={itemcomponent.title}
										itemImage={itemcomponent.image}
										title={itemcomponent.title}
										price={`$` + itemcomponent.price}
										link = {itemcomponent.link}
										handlePurchaseSave7 = {this.handlePurchaseSave7}
										handlePurchaseSave14 = {this.handlePurchaseSave14}
										handlePurchaseSave30 = {this.handlePurchaseSave30}
								/>
							)}
					/>
				</Row>

				<Row>
					<SearchPanel
						search={<Carousel
									savedItemCards={
										this.state.purchases.map(saveditem =>
											<SavedCard
												key={saveditem.title}
												id={saveditem.title}
												savedImage={saveditem.image}
												savedprice={`$` + saveditem.price}
												savedTitle={saveditem.title}
												username = {saveditem.username}
											/>
									)}
								/>
						}
					/>
				</Row>
			</Container>
		</Wrapper>)
			}
			{
			  !isAuthenticated() && (
				  <h4>
					You are not logged in! Please{' '}
					<a
					  style={{ cursor: 'pointer' }}
					  onClick={this.login.bind(this)}
					>
					  Log In
					</a>
					{' '}to continue.
				  </h4>
				)
			}
		  </div>
		);
	  }

}

export default Home;
