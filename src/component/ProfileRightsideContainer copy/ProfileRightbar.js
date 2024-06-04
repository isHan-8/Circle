import React, { useEffect, useState } from 'react'
import "./profilerightbar.css"
import ads from "../Images/ads.jpg";

import addFriends from "../Images/add-user.png"
import axios from 'axios';
import Follow from '../RightsideContainer/Follow';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux'; 
// import { useLocation } from 'react-router-dom';
export default function ProfileRightbar() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  let location = useLocation();
  let id = location.pathname.split("/")[2];
  let idforSuggest = user?.other?._id
  console.log(id);
    const [Followinguser, setFollowinguser] = useState([]);
  useEffect(() => {
    const getFollowing = async () => {  
      try {
        const res = await axios.get(
          `http://localhost:5000/api/post/followers/${id}`
        );
        setFollowinguser(res.data);
      } catch (error) {
        console.log("Some error occured");
      }
    };
    getFollowing();
  }, []);
  console.log(Followinguser);

  const [users , setUsers] = useState([]);
    // const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc4MWRlZGQyYTg2MmZiZWI1ZDdjMiIsInVzZXJuYW1lIjoia2lzaCIsImlhdCI6MTcwOTc4ODcyN30.eaqX53M3pa_6BhPeF2UEFM9fQPxi6vpWDF4sKsujq6A";
    useEffect(() => {
        const getuser = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/user/all/user/${idforSuggest}`);
            setUsers(res.data);
          } catch (error) {
            console.log("Some error occured")
          }
        }
        getuser();
      }, [])
      console.log(users)



    return (
        <div className='Profilerightbar'>
        <div className='profilerightcontainer'>
          <h3>Followers</h3>
          <div>
            {Followinguser.map((item)=>(
              <div style={{marginTop:"10px"}}>
               <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
                <img src={`${item.profile}`} className="Friendsimage" alt="" />
                <p style={{textAlign:"start"  , marginLeft:"20px"}}>{item.username} </p>
              </div>
            </div>
              ))}
            
            
            
          </div>
  
        </div>
  
        <div className='rightcontainer2'>
          <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>
          {users.map((item)=>(
            <Follow userdetails={item}/>
            ))}
          
        </div>
  
  
      </div>
    )
  }