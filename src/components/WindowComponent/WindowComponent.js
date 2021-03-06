import React, { Component } from 'react';
import {styles} from './window.css';



class WindowComponent extends Component {

//https://i.redd.it/79qghnkw98721.jpg
//https://i.redd.it/hm9dujjr22a21.jpg
//background-image: url("https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg");
//https://i.redd.it/dwsod4t24n921.jpg
///https://i.redd.it/7oah0nilwhp11.jpg
  	constructor(props){
  		super(props);
  		this.state = {
  			imgUrl: "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/WinterMoodBoard/gHQr2Tr.jpg"
  		}

  	 }


	render() {
		let sectionStyle = {
			backgroundImage:`url(${this.state.imgUrl})`
		}
    	return (

      		<div className = "window" style={sectionStyle}>
      	 
      		</div>
    	);
  }
}

export default WindowComponent;
