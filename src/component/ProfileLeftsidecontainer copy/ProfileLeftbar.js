import React, { useEffect } from "react";
import "./profileleftbar.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";

import { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
export default function ProfileLeftbar() {
  let location = useLocation();
  let id = location.pathname.split("/")[2];
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  const [Follow , setUnFollow] = useState([user?.other?.Following.includes(id) ? "Unfollow" : "Follow"]);
  // const accessToken = user.accessToken;
  // const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc3ODgxZGQyYTg2MmZiZWI1ZDY0NCIsInVzZXJuYW1lIjoiUml5YSIsImlhdCI6MTcwOTkwNzk5MX0.XseOnsK4cXke7lrGxo1H4o8PomipNvLxLg7AX7hauYE";
  const accessToken = user?.accessToken;
  console.log(accessToken)
  let username = user?.other?.username;
  // let followersCounter = user.other.Followers.length;
  // let followingCounter = user.other.Following.length;
  const [users , setuser] = useState([]);

  useEffect(() => {
    const getuser = async()=>{
      try {
        const res  = await axios.get(`http://localhost:5000/api/user/post/user/details/${id}`)
        setuser(res.data);
      } catch (error) {
        console.log("Some error occured") 
      }
    } 
    getuser();
  }, [])
  console.log(users);
  let followersCounter = users?.Followers?.length;
  let followingCounter = users?.Following?.length;
  //   let followingCounter = users?.Following?.length;
  
  const [Followinguser, setFollowinguser] = useState([]);
  useEffect(() => {
    const getFollowing = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/following/${id}`
        );
        console.log("data", res.data);
        setFollowinguser(res.data);
      } catch (error) {
        console.log("Some error occured");
      }
    };
    getFollowing();
  }, []);
  const handleFollow= async()=>{
    //  console.log(userdetails);
                  // await fetch(`http://localhost:5000/api/user/following/${userdetails._id}` , {method:'PUT', headers:{'Content-Type':"application/JSON" , token:accesstoken}  , body:JSON.stringify({user: userdetails._id})})
                  if(Follow === "Follow"){
                  await fetch(`http://localhost:5000/api/user/following/${id}` , {method:'PUT', headers:{'Content-Type':"application/JSON" , token:accessToken} , body:JSON.stringify({user:`${user.other._id}`})})
                  // await fetch(`http://localhost:5000/api/user/following/${userdetails._id}` , {method:'PUT', headers:{'Content-Type':"application/JSON" , token: accesstoken} , body:JSON.stringify({user:`${id}`})})
  
                  setUnFollow("Unfollow");
            } else{
              await fetch(`http://localhost:5000/api/user/following/${id}` , {method:'PUT', headers:{'Content-Type':"application/JSON" , token:accessToken} , body:JSON.stringify({user:`${user.other._id}`})})
              // await fetch(`http://localhost:5000/api/user/following/${userdetails._id}` , {method:'PUT', headers:{'Content-Type':"application/JSON" , token: accesstoken} , body:JSON.stringify({user:`${id}`})})

              setUnFollow("follow");
            }
  
          }

  
  console.log(Followinguser);
  return (
    <div className="ProfileLeftbar">
      <div className="NotificationsContainer">
      <img src={users.profile} className="Profilepageimage" alt="" />
        <div style={{ display: "flex", alignItems: "center", marginTop: -30 }}>
          <img src={users.profile} className="Profilepageimage1" alt="" />

          <div>
            <p
              style={{
                marginLeft: 8,
                marginTop: 22,
                color: "purple",
                textAlign: "start",
                marginTop: 29,
                // fontSize: 11,
              }}
            >
              {users.username}
            </p>
            <p
              style={{
                marginLeft: 8,
                marginTop: 10,
                color: "black",
                textAlign: "start",
                marginTop: -12,
                fontSize: 11,
              }}
            > 
             Software Developer
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            Profile Views
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}
          >
            {followingCounter}
          </p>
        </div>
        {/* <hr style={{marginTop:-10}} /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -20,
          }}
        >
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>
            Followers
          </p>
          <p
            style={{
              color: "black",
              marginRight: 20,
              fontSize: "12px",
              marginTop: 17,
            }}
          >
            {followersCounter}
          </p>
        </div>
        {/* <hr style={{marginTop:-10}} /> */}
        <div style={{ marginTop: -20 }}>
          <h5
            style={{
              color: "black",
              marginLeft: 20,
              fontSize: "15px",
              marginLeft: 10,
              marginTop: 30,
              textAlign: "start",
            }}
          >
            User Bio
          </h5>
          <p
            style={{
              color: "black",
              fontSize: "12px",
              marginTop: -20,
              textAlign: "start",
              marginLeft: "10px",
            }}
          >
            I would rather be deposit who i am apart from taking part in the
            shit hell
          </p>
        </div>
        {user?.other?._id !== id ? <div onClick={handleFollow}><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>{Follow}</button></div> : <div><button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>Edit Bio</button></div> }
        </div>
{/* 123 */}
{/*  */}
      <div className="NotificationsContainer">
        <h3>Followings</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginLeft: 10 }}>friends</p>
          <p style={{ marginRight: 10, color: "#aaa" }}>See all</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", marginLeft: 5 }}>
          {Followinguser.map((item) => (
            <Link to={`/Profile/${item._id}`}>
            <div style={{ marginLeft: 24, cursor: "pointer" }} key={item._id}>
              <img src={`${item.profile}`} className="friendimage" alt="" />
              <p style={{ marginTop: -2 }}>{item.username}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
