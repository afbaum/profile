import React, {Component} from 'react';


class Type extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const type = this.props.typearray.map( (item,index) => {
      return <option key={item.key} value={item.key}>{item.type}</option>
    })
    return(
      <div>
        <select ref="typeSelector" onChange={this.props.selectType}>{type}</select>
        <h1>{this.props.activity}</h1>
      </div>
    )
  }
}

export default Type
