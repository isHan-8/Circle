import React, { useEffect } from 'react'
import "./profilemainPost.css";
import Coverimage from "../Images/Profile.png"
import ContentPost from '../ContentPostContainer/ContentPost'
import Post from '../ProfilePostContainer copy/Post';
// import Post from '../PostContainer/Post';
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
export default function ProfileMainPost() {
  const [post , setPost] = useState([]);
    let location = useLocation();
  let id = location.pathname.split("/")[2];
  // const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc3ODgxZGQyYTg2MmZiZWI1ZDY0NCIsInVzZXJuYW1lIjoiUml5YSIsImlhdCI6MTcwOTkwNzk5MX0.XseOnsK4cXke7lrGxo1H4o8PomipNvLxLg7AX7hauYE";
  useEffect(() => {
    const getPost = async()=>{
      try {
        const res = await axios.get(`http://localhost:5000/api/post/get/post/${id}`)
        setPost(res.data);
      } catch (error) {
        console.log("error occured")
      }
    }
    getPost();
  }, [])
  return (
    <div className='ProfilemainPostContainer' >
    <div>
      <img src={Coverimage} className='profileCoverimage' alt="" />
      <h2 style={{marginTop:-43 ,  color:'white', textAlign:'start' , marginLeft:'35px'}} >Your Profile</h2>
    </div>
      <ContentPost/>
      {post.map((item)=>(
        <Post detail={item}/>
      ))}
{/* <Post /> */}
    </div>
  )
}
