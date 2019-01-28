import React, { Component } from 'react';
import axios from 'axios';
import styles from '../index.css';

class InputComponent extends Component {
	constructor(props){
		super(props)

		this.handleChange = this.handleChange.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);

		this.handleTitleChange = this.handleTitleChange.bind(this);

	}
 

  	state = {
    action: "",
    title: "",
    bodyInput: "",
	dateStamp: Date(),
	images: []


  }

  addContent = () =>{

  	const task = {  action: this.state.action, 
  					title: this.state.title,
  					dateStamp: this.state.dateStamp,
  					body: this.state.bodyInput,
  					images: this.state.images
  				}

  	console.log(task)


  	 if(task.action && task.action.length > 0){
  	 //// Submit
      axios.post('/api/contents', task)
        .then(res => {
        	console.log(task)

          if(res.data){
          	/// Defined in ContainerComponent.js
            this.props.getContents();
          	/// Reset
            this.setState({action: "", dateStamp: Date(), bodyInput: "", title: "", images: []})
          }
        })
        .catch(err => console.log(err))
    }else 
    {
      console.log('input field required')
    }
  }


  

  handleChange = (e) => {
  	this.setState({
  		action: e.target.value
  	})
  }

  handleChange2 = (event) => {
  	this.setState({
  		bodyInput: event.target.value
  	})
  }

  handleTitleChange = (event) => {
  	this.setState({
  		title: event.target.value
  	})
  }
   handleImageChange = (event) => {
  	this.setState({
  		images: event.target.value
  	})
  }

 render() {
    let { action } = this.state;
    return (
      <div className="newPost">
      	Action
        <p><input type="text" onChange={this.handleChange} value={action}/></p>
        Title
        <p><input type="text" onChange={this.handleTitleChange} value={this.state.title}/></p>
        Body
        <p><textarea onChange={this.handleChange2} value={this.state.bodyInput}/></p>

        Images
        <p><input type="text" onChange={this.handleImageChange} value={this.state.images}/></p>
        <button onClick={this.addContent}>Add Content</button>

      </div>
    )
  }
}

export default InputComponent