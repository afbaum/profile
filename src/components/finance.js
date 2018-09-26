import React from 'react';

function Table(props){
  return(
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Open</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Close</th>
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

function Finance(props){
  return(
    <div>
      <div class="card text-center">
      <div class="card-header">
        Stock Price Lookup
      </div>
      <div class="card-body">
        <div className="container">
          <div className="row">
            <select>
              <option>FB</option>
              <option>NFLX</option>
            </select>
            <select>
              <option>20180327</option>
              <option>20180227</option>
            </select>
          </div>
        </div>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Open</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Close</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.stock.map(data =>
              <div>
                <td scope="row">{data[0]}</td>
                <td>{data[1]}</td>
                <td>{data[2]}</td>
                <td>{data[3]}</td>
                <td>{data[4]}</td>
              </div>)}
          </tr>
        </tbody>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
      </div>
    </div>
  )
}

export default Finance;
