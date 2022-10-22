import React from 'react'
import Items from './Items'
export default function ShowItems() {
    const listsongs = [
        {
            name : "With You" ,
            singer : " Gabry Ponte, JP Cooper" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/a/6/d/f/a6dfae74cebe671e7469dd027a900d0e.jpg",
            dayLoad : "1 ngày trước"
        },
        {
            name : "Nỗi Nhớ Khi Xưa" ,
            singer : "Kha" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/4/d/0/0/4d00828fa8153ec0c4f23cd8aa28b45c.jpg",
            dayLoad : "1 ngày trước"
        },
        {
            name : "Monotonia" ,
            singer : " Shakira, Ozuna" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/f/d/f/8fdf91076331c0a1a9c3664d066d2ae1.jpg" ,
            dayLoad : "1 ngày trước"
        } ,
        {
            name : "WDIA (Would Do It Again)" ,
            singer : " Rosa Linn, Duncan Laurence",
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/4/f/0/c4f04f545e0ddb787233dcff5ec1bac0.jpg" ,
            dayLoad : "1 ngày trước"
        },
        {
            name : "Cô Đơn Trên Sofa" ,
            singer : "Hồ Ngọc Hà" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg",
            dayLoad : "1 ngày trước"
        },
        {
            name : "Vàng" ,
            singer : "Daisy Le Garcon, Wren Evans" ,
            img :  "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/f/2/a/7/f2a732df7c86402ffbd29f95b0c45fe6.jpg",
            dayLoad : " ngày trước"
        },
        {
            name : " Hẹn Em Trong Ký Ức" ,
            singer : " Thái Đinh, Nam Kun",
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/e/a/2/5/ea25155dfcfdef73edf6479f7eb76d43.jpg",
            dayLoad : "1 ngày trước"
        },
        {
            name : "906090" ,
            singer : " Tóc Tiên, Mew Amazing" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/e/e/1/1ee19270545210d8de618e94ee6f1f14.jpg",
            dayLoad : "2 ngày trước"
        },
        {
            name : "Bài này không để đi diễn" ,
            singer : " Anh Tú Atus" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/2/9/4/b2943abd92e70b71f681972103343a65.jpg",
            dayLoad : "2 ngày trước"
        } , 
        {
            name : "Lời Có Cánh" ,
            singer : "OSAD" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/5/2/9/2/5292d3f5146bd192c58139935cc6dce7.jpg",
            dayLoad : "2 ngày trước"
        },
        {
            name : "Let It Die" ,
            singer : " Ellie Goulding " ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/c/3/6/4/c364931c84cb6a7d015eb4d2f4854243.jpg",
            dayLoad : "2 ngày trước"
        },
        {
            name : "Hối Duyên " ,
            singer : "Masew, Khoi Vu, Great" ,
            img : "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/8/2/9/a/829a8e27aff8bd84180f4b81dc576f0c.jpg",
            dayLoad : "3 ngày trước"
        }

    ]
  return (
    <div> 
        <ul className='card'>
        {
            listsongs.map( item => (
                <Items name = {item.name} singer = {item.singer} img = {item.img} day = {item.dayLoad}  ></Items>
            ))
        }
        </ul>


    </div>
  )
}
