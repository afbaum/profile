import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/mainpage/Header.js';
import MainNav from './components/mainpage/Navbar.js';
import MainCards from './components/mainpage/Cards.js';
import Bored from './components/Bored/Bored.js';
import Endpoints from './components/Bored/Endpoints.js';
import './App.css';

var typearray = [
    {key:0, type:"Education"},
    {key:1, type:"Recreational"},
    {key:2, type:"Social"},
    {key:3, type:"DIY"},
    {key:4, type:"Charity"},
    {key:5, type:"Cooking"},
    {key:6, type:"Relaxation"},
    {key:7, type:"Music"},
    {key:8, type:"Busywork"}
];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: "all",
      participants: '',
      price: [],
      accessibiliity: [],
      activity: ''
    }
  }

  selectType(event){
    this.setState({type: typearray[event.target.value].type})
    console.log(this.state.type);
    fetch(`https://www.boredapi.com/api/activity?type=recreational`)
    .then(response => response.json())
    .then(data => {this.setState({activity: data.activity})})
  }

  selectPeople(event){
    console.log(event.target.value);
    this.setState({participants: event.target.value})
  }

  selectPrice(event){
    console.log(event.target.value);
  }

  componentDidMount(){
    fetch(`https://www.boredapi.com/api/activity`)
    .then(response => response.json())
    .then(data => {this.setState({type: data.type,
                                  activity: data.activity})})
  }

  render() {
    return (
      <div>
        <MainNav />
        <Header />
        <MainCards />
        <Bored  typearray={typearray}
                activity={this.state.activity}
                selectType={this.selectType.bind(this)}/>
        <Endpoints selectPeople = {this.selectPeople.bind(this)}
                    selectPrice = {this.selectPrice.bind(this)}/>
      </div>
    );
  }
}

export default App;
