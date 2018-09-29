import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Bored from './components/Bored/Bored.js';
import People from './components/Bored/Endpoints.js';
import './App.css';

var typearray = [
    {key:1, type:"Education"},
    {key:2, type:"Recreational"},
    {key:3, type:"Social"},
    {key:4, type:"DIY"},
    {key:5, type:"Charity"},
    {key:6, type:"Cooking"},
    {key:7, type:"Relaxation"},
    {key:8, type:"Music"},
    {key:9, type:"Busywork"}
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: '',
      participants: '',
      price: [],
      accessibiliity: [],
      activity: ''
    }
  }

  selectType(){
    console.log(this.value);
  }

  componentDidMount(){
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {this.setState({type: data.type,
                                  activity: data.activity})})
  }

  render() {
    return (
      <div>
        <Bored typearray={typearray} activity={this.state.activity} selectType={this.selectType.bind(this)}/>
        <People/>
      </div>
    );
  }
}

export default App;
