import React from 'react'
import SongRecommend from './SongRecommend'

export default function ListSongRecommend() {
    const RecommendSong =  [
        {
            img : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/0/b/8/c0b80cd2ebe754aece9f4fc3ad219c50.jpg",
            title : "Nhạc Cho Thứ Bảy " ,
            discription : " Thứ Bảy là phải chạy theo những track Remix thịnh hành"
        },
        {
            img : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/2/9/7/92977718b3a7190ac4ff9eb89527556a.jpg",
            title : "V-Pop Đầy Hứa Hẹn " ,
            discription : "V-Pop hứa hẹn sẽ thành hit trong ngày mai"
        },
        {
            img : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/3/3/2/4332effbb455e8e0c4dcb3eda0e7e197.jpg",
            title : "Pop All Stars" , 
            discription : "Taylor Swift và những siêu sao nhạc Pop nổi nhất hiện nay",
        },
        {
            img : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/b/5/f/9b5f82d251ba4d6c697b779d40482465.jpg",
            title : " Everyday EDM" ,
            discription : " Khởi động lễ hội festival cùng những bản EDM cực cháy"
        },
        {
            img : "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/5/3/0/c530cb944e470e098de37fc5e40c67d0.jpg",
            title : " Hot Hits Vietnam" ,
            discription : " Hits nổi nhất tại Việt Nam từ Đông sang Tây có đủ ở đây"
        }

    ]
  return (
    <div className='contain__recomendSong'>
        <h2 className='title__recommend'> Cuối Tuần Lên Nhạc</h2> 
        <ul className='card'>
            {
                RecommendSong.map( item => (
                    <SongRecommend img = {item.img} title = {item.title} discription = { item.discription}></SongRecommend>
                ))
            }
        </ul>
    </div>
  )
}
