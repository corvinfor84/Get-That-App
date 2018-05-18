import React from "react";
import anime from 'animejs';
import "./StatBlock.css";

var slide = document.querySelector('div');

var DomNode = anime({
  targets: slide,
  translateX: [
    { value: 2000, duration: 800 },
    { value: 0, duration: 800 }
  ],
  rotate: '1turn',
  easing: 'easeOutExpo',
  duration: 2100
});



 const StatBlock = (props) => (

			<div className="col-sm bg-secondary info-quad br-edges text-center">
				<h6>{props.title}</h6>
				<h5>{props.amount}</h5>
				<div className="proBar">{props.progress}</div>
				<img src={props.icon} alt = "" className="icon-img"/>
			</div>

);

export default StatBlock;
