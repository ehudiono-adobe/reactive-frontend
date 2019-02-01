import React, {Component} from 'react';
import axios from 'axios';

import InputComponent from './InputComponent';
import ListComponent from './ContentListComponent';
import TileComponent from './TileComponent';
class ContainerComponent extends Component {

  state = {
    contents: []
  }

  componentDidMount(){
    this.getContents();
  }

  getContents = () => {
    axios.get('/api/contents')
      .then(res => {
        if(res.data){
          this.setState({
            contents: res.data
          })

        }
      })
      .catch(err => console.log(err))
  }

  deleteContent = (id) => {

    axios.delete(`/api/contents/${id}`)
      .then(res => {
        if(res.data){
          this.getContents()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    {/* What is this for? */}
    let { contents } = this.state;

    return(
      <div>
      {/* Ping the mlab server and get the contents back*/}
        { this.getContents()}

        <InputComponent getContents={this.getContents}/>

        {/* Render out the contents via a list */}
        <ListComponent contents={contents} deleteContent={this.deleteContent}/>
      </div>
    )
  }
}

export default ContainerComponent;