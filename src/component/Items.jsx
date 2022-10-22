import React from 'react'
import "../assets/css/item.css"
export default function Items(props) {
  return (
 
     
        <li className="cardConten">
        <img
          src= {props.img}
          alt=""
        />
        <div className="infor">
          <h4 className='tittle'> {props.name}</h4>
          <p>{props.singer}</p>
          <p>{props.day}</p>
        </div>
        </li>
  

  )
}
