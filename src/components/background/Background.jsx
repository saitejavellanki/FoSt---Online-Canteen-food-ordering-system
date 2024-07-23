import React from 'react'
import "./Background.css"
import video1 from "../../Assets/video1.mp4"
import image1 from "../../Assets/photo-1549007953-2f2dc0b24019.avif"
import image2 from "../../Assets/Food-PNG-HD.png"
import image3 from "../../Assets/—Pngtree—healthy food_3776802.png"

const Background = ({playStatus, heroCount}) => {
  if(playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted >
            <source src={video1} type='video/mp4'/>
        </video>
    )
  }
  else if(heroCount===0){
    return <img src={image1} className='background fade-in' alt=''/>
  }
  else if(heroCount===1){
    return <img src={image2} className='background fade-in' alt=''/>
  }
  else if(heroCount===2){
    return <img src={image3} className='background fade-in' alt=''/>
  }
}

export default Background
