import "../src/assets/css/body.css"
import React from 'react'
import Header from "./component/Header"
import ShowItems from "./component/ShowItems"
import ListSongRecommend from "./component/ListSongRecommend"


export default function App() {
  return (
    <div>
      <Header></Header>
      <ShowItems></ShowItems>
      <ListSongRecommend></ListSongRecommend>
    </div>
  )
}
