import React, {Constructor} from 'react'

function People(props){
  return(
    <div className='container'>
      <div className="row">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5 or more</option>
        </select>
        <select>
          <option>$</option>
          <option>$$</option>
          <option>$$$</option>
          <option>$$$$</option>
          <option>$$$$$</option>
        </select>
      </div>
    </div>
  )
}

export default People
