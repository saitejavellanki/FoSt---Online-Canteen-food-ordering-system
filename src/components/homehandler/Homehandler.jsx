import React, { useEffect, useState } from 'react'
import Background from '../background/Background'

import Hero from '../hero/Hero'


const Homehandler = () => {

  let heroData = [
    {text1:"Order Right From", text2:"Your Table"},
    {text1:"Most Responsive", text2:"Ordering System"},
    {text1:"Getting", text2:"Started"},
  ]

  const [heroCount, setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)

  useEffect(()=> {
    setInterval(() => {
        setHeroCount((count) => {return count===2?0:count+1})
    }, 5000)
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      
      <Hero
        setPlayStatus = {setPlayStatus}
        heroData = {heroData[heroCount]}
        heroCount = {heroCount}
        setHeroCount = {setHeroCount}
        playStatus = {playStatus}
      />
    </div>
  )
}

export default Homehandler
