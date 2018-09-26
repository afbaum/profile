import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TitleNav from './components/navbar.js';
import Head from './components/head.js';
import Finance from './components/finance.js';
import ProductList from './components/productlist.js';
import Forum from './components/forum.js';
import Youtube from './components/Youtube.js';
import './App.css';

var array =[
  {id: 100, product:"Apple", price:3},
  {id: 101, product:"Banana", price:1},
  {id: 102, product:"Carrot", price:2},
  {id: 103, product:"Donuts", price:5},
  {id: 104, product:"Eggplant", price:4}
]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stock: []
    }
  }

  componentDidMount(){
    fetch('https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?start_date=20180201&api_key=AzVP9a9xiSGQzU5pkSC9')
    .then(response => response.json())
    .then(data => {this.setState({stock: data.dataset_data.data})})
  }

  render() {
    console.log(this.state.stock);
    return (
      <div>
        <TitleNav/>
        <Head/>
        <Finance stock={this.state.stock}/>
        <ProductList productArray = {array}/>
        <Forum/>
        <Youtube/>
      </div>
    );
  }
}

export default App;
