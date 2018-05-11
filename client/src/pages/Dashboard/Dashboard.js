import React, { Component } from "react";
import { Link } from "react-router-dom";
// Component Imports
import Wrapper from "../../components/Wrapper";
import { Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import StatBlock from "../../components/StatBlock";
import UserChart from "../../components/UserChart";
import SearchPanel from "../../components/SearchPanel";
import SetBudgetInput from "../../components/SetBudgetInput";
import SearchItemInput from "../../components/SearchItemInput";
import SearchItemBtn from "../../components/SearchItemBtn";
import ShowSearchDisplay from "../../components/ShowSearchDisplayBox";
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


class Dashboard extends React.Component {
	state = {
		items: [
		{
		title: "32 DEGREES Heat Mens’ Performance Rain Jacket",
		image: "https://images-na.ssl-images-amazon.com/images/I/81eVEgZfZML._UX679_.jpg",
		price: 29.99,
		department: "Mens Items",
		link: "https://www.amazon.com/MENS-RAIN-JACKET-Black-X-Large/dp/B06XHTXWJ9/ref=pd_lutyp_cxhsh_2_3?_encoding=UTF8&pd_rd_i=B06XHTXWJ9&pd_rd_r=851FWAG9JP723R3PPCC0&pd_rd_w=blP5r&pd_rd_wg=xor6V&psc=1&refRID=851FWAG9JP723R3PPCC0"
		},
		{
		title: "Hamilton Beach Easy Clean Big Mouth 2-Speed Juice",
		image: "https://images-na.ssl-images-amazon.com/images/I/81%2BGhijcEPL._SL1500_.jpg",
		price: 84.00,
		department: "Appliances",
		link: "https://www.amazon.com/Hamilton-Beach-2-Speed-Extractor-67850/dp/B01GVGX84Q/ref=br_msw_pdt-4?_encoding=UTF8&smid=ATVPDKIKX0DER&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=&pf_rd_r=XP5MSTFMZG8N8T8NSG9B&pf_rd_t=36701&pf_rd_p=f6637627-c07b-4f41-9ac1-54f8e47f4861&pf_rd_i=desktop"
		},
		{
		title: "Fitbit Charge 2 Heart Rate + Fitness Wristband, Blue, Small (US Version)",
		image: "https://images-na.ssl-images-amazon.com/images/I/81HOoweIt%2BL._SL1500_.jpg",
		price: 119.99,
		department: "Electronics",
		link: "https://www.amazon.com/dp/B01K9S24BU/ref=s9_acsd_bw_wf_a_dlp6e791_cdl_8?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-1&pf_rd_r=8QGVJ5JFPY1SC3KFK7BX&pf_rd_t=101&pf_rd_p=0&pf_rd_i=283155&th=1"
		}
		],
		budget: "",
		watching: [],
		purchased: []
		
	}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value 
    });
  };

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