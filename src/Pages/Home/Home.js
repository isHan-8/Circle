import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../component/Navbar/Navbar'
import "./home.css"
import Leftbar from '../../component/Leftsidecontainer/Leftbar'
import MainPost from '../../component/MainPostContainer/MainPost'
import Rightbar from '../../component/RightsideContainer/Rightbar'
import Bot from '../../component/Bot/Bot'
// import News from '../../component/news/News'
export default function Home() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  console.log(user)
  return (
    <div className='home'>
      <Navbar/>
      <div className='ComponentContainer'>
          <Leftbar/>
          <MainPost/>
          <Rightbar/>
          {/* <News/> */}
          <Bot/>
      </div>
    </div>
  )
}
