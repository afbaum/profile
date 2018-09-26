import React, { Component } from 'react'

//Input field
function InputFirst(props){
  return(
    <div className="container">
      <div className="form-group">
        <label for="imputComponent">{props.title}</label>
        <input type="text" className="form-control" id="inputComponent" value={props.name} onChange={props.changeFirstname}/>
      </div>
    </div>
  )
}

function InputLast(props){
  return(
    <div className="container">
      <div className="form-group">
        <label for="imputComponent">{props.title}</label>
        <input type="text" className="form-control" id="inputComponent" value={props.name} onChange={props.changeLastname}/>
      </div>
    </div>
  )
}

//checkboxes
function Checkbox(props){
    return(
      <div className="container">
        <input className="form-check-input" type="checkbox" value={props.checkValue} id="checkBox" onChange={props.handleCheck}/>
        <label className="form-check-label" for="checkBox">
        {props.title}
        </label>
      </div>
    )
}

function Submitbutton(props){
  return(
    <div className="container">
      <button type="submit" className="btn btn-secondary" onClick={props.handleFormSubmit}>Submit</button>
    </div>
  )
}

//Select
function Select(props){

  return(
    <div className="container">
      <div className="form-group">
        <label for="selectComponent">Select Activity</label>
        <select className="form-control" id="selectComponent"  onChange={props.activity}>
          {props.selectList.map(p => <option refs="classSelector" key={p.id} value={p.name}>{p.name}</option>)}
        </select>
      </div>
    </div>
  )
}

function Table(props){
  return(
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Remove</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Activity</th>
            <th scope="col">Restriction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">button</th>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>Coding</td>
            <td>Fun</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

class Forum extends Component{
  constructor(props){
    super(props)
    this.state = {
      nameFirst:'',
      nameLast: "",
      activity:"Science Lab",
      checkValue: false,
      selectList: [
        {id:1, name: "Science Lab"},
        {id:2, name: "Swimming"},
        {id:3, name: "Cooking"},
        {id:4, name: "Painting"}
      ],
    };
  }

  changeFirstname(event){
      this.setState({nameFirst: event.target.value});
  }

  changeLastname(event){
      this.setState({nameLast: event.target.value});
  }

  handleActivity(event){
    console.log(this.refs.classSelector);
  }

  handleCheck(event){
    this.setState({checkValue: true});
  }

  handleFormSubmit(){
    console.log('yo');
  }

  render(){
    return(
      <div>
        <InputFirst title= "First Name" name={this.state.nameFirst} changeFirstname={this.changeFirstname.bind(this)}/>
        <InputLast title="Last Name" name={this.state.nameLast} changeLastname={this.changeLastname.bind(this)}/>
        <Select selectList = {this.state.selectList} activity={this.handleActivity.bind(this)}/>
        <Checkbox title="a) Dietary Restictions" value = {this.state.checkValue} handleCheck={this.handleCheck.bind(this)}/>
        <Checkbox title="b) Physical Disabilities" value = {this.state.checkValue}/>
        <Checkbox title="c) Medical Needs" value = {this.state.checkValue}/>
        <Submitbutton handleFormSubmit={this.handleFormSubmit}/>
        <Table firstName={this.state.nameFirst} lastName={this.state.nameLast}/>
      </div>
    );
  }
}



export default Forum
