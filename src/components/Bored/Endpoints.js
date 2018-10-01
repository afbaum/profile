import React, {Constructor} from 'react'

function Endpoints(props){
  return(
    <div className='container'>
      <div className="row">
        <select onChange={props.selectPeople}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5 or more</option>
        </select>
        <select onChange={props.selectPrice}>
          <option value={0.1}>$</option>
          <option value={0.3}>$$</option>
          <option value={0.5}>$$$</option>
          <option value={0.7}>$$$$</option>
          <option value={1}>$$$$$</option>
        </select>
      </div>
    </div>
  )
}

export default Endpoints
