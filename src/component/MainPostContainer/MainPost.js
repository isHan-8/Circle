import React from 'react'
import "./mainPost.css";
import ContentPost from "../ContentPostContainer/ContentPost"
import Post from '../PostContainer/Post';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
export default function MainPost() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user;
  console.log(user);
  let id = user?.other?._id;
  const accesstoken = user?.accessToken;
  console.log(accesstoken)
  const [post , setPost] = useState([]);
  // const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc3ODgxZGQyYTg2MmZiZWI1ZDY0NCIsInVzZXJuYW1lIjoiUml5YSIsImlhdCI6MTcwOTkwNzk5MX0.XseOnsK4cXke7lrGxo1H4o8PomipNvLxLg7AX7hauYE";
  // console.log(accesstoken)
  // const [post , setPost] = useState([]);
  useEffect(() => {
    const getPost = async()=>{
     try {
       const res = await axios.get(`http://localhost:5000/api/user/flw/${id}` , {
         headers:{
           token:accesstoken
         }
       })
       setPost(res.data);
     } catch (error) {
       
     }
    }
    getPost();
   }, [])
 
   console.log(post);
   
  return (
    
    <div className='mainPostContainer'>
    <ContentPost />
    {post.map((item) => (
        <Post post={item} />
    ))}
  </div>
  
  )
}
