import React, { Component } from 'react'

class ProductList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    var elements = this.props.productArray.map( (item,index) => {
      return <li key={item.id}>Product: {item.product} | Price: ${item.price}  </li>
    })
    return <ol>{elements}</ol>
  }
}

export default ProductList
