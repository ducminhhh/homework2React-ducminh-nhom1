import React from 'react'
import "../assets/css/listSongRecommend.css"
export default function SongRecommend(props) {
  return (
    <li className="cardConten__recommend">
    <img
      src= {props.img}
      alt=""
    />
    <div className="infor__recommend">
      <span> {props.title}</span>
      <p>{props.discription}</p>
    </div>
  </li>
  )
}
