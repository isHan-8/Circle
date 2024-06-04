import React, { useEffect, useState } from 'react'
import "./leftbar.css";
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg"
import axios from 'axios';
import { useSelector } from 'react-redux';
export default function Leftbar() {
    const userDetails = useSelector((state)=>state.user);
    let user = userDetails?.user
    console.log(user);
    
    let id = user?.other?._id;
    // const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc3ODgxZGQyYTg2MmZiZWI1ZDY0NCIsInVzZXJuYW1lIjoiUml5YSIsImlhdCI6MTcwOTkwNzk5MX0.XseOnsK4cXke7lrGxo1H4o8PomipNvLxLg7AX7hauYE";
    const accesstoken = user?.accessToken;
    console.log(accesstoken)
    const [post , setPost] = useState([]);
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
        <div className='Leftbar' >
            <div className='NotificationsContainer'  > 
                <div className='NotificationsContainer2' style={{ display: 'flex', justifyContent: 'space-around'  }} >
                    <p style={{marginLeft : '-14px'}} >Notifications</p>
                    <p style={{ color: "#aaa" , marginLeft:'40px' }} >See all</p>
                </div>
                    <div style={{display: 'flex' , alignItems: 'center' , marginTop: 6}} >
                        <img src={image5} className='notificationimg' alt="" />
                    <p style={{marginLeft: '5px' , color: '#aaa' , fontSize:13 , width:'120px' , textAlign: 'start' }} >yamunaq  like your post</p>
                <img src={image1} className='likeimage' alt="" />
                    </div>
                    <div style={{display: 'flex' , alignItems: 'center' , marginTop: 6}} >
                    <img src={image2} className='notificationimg' alt="" />
                <p style={{marginLeft: '5px' , color: '#aaa' , fontSize:13 , textAlign: 'start' , width:'120px'}} >tika started following you </p>
            <img src={image2} className='followinguserimage' alt="" />
                </div>
                <div style={{display: 'flex' , alignItems: 'center' , marginTop: 6}} >
                    <img src={image5} className='notificationimg' alt="" />
                <p style={{marginLeft: '5px' , color: '#aaa' , fontSize:13 , width:'120px' , textAlign: 'start'}} >duniya like your post</p>
            <img src={image3} className='likeimage' alt="" />
                </div>
                <div style={{display: 'flex' , alignItems: 'center' , marginTop: 6}} >
                    <img src={image1} className='notificationimg' alt="" />
                <p style={{marginLeft: '5px' , color: '#aaa' , fontSize:13 , width:'120px' , textAlign: 'start'}} >tina
                 like your post</p>
            <img src={image4} className='likeimage' alt="" />
                </div>
               
               
                <div style={{display: 'flex' , alignItems: 'center' , marginTop: 6}} >
                    <img src={image6} className='notificationimg' alt="" />
                <p style={{marginLeft: '5px' , color: '#aaa' , fontSize:13 , width:'120px' , textAlign: 'start'}} >oshi like your post</p>
            <img src={image5} className='followinguserimage' alt="" />
                </div>
                <div style={{display: 'flex' , alignItems: 'center' , marginTop: 6}} >
                    <img src={image3} className='notificationimg' alt="" />
                <p style={{marginLeft: '5px' , color: '#aaa' , fontSize:13 , width:'120px' , textAlign: 'start'}} > jay like your post</p>
            <img src={image6} className='followinguserimage' alt="" />
                </div>
                <div style={{display: 'flex' , alignItems: 'center' , marginTop: 6}} >
                    <img src={image} className='notificationimg' alt="" />
                <p style={{marginLeft: '5px' , color: '#aaa' , fontSize:13 , width:'120px' , textAlign: 'start'}} >riya like your post</p>
            <img src={image} className='likeimage' alt="" />
                </div>  
            </div>
            <div className='NotificationsContainer1'  > 
                <div style={{ display: 'flex', justifyContent: 'space-around' }} >
                    <p style={{marginLeft: '-20px'}} >Explore</p>
                    <p style={{ color: "#aaa" , marginLeft: '40px'}} >See all</p>
                </div>
                <div>
                                                  {post.map((item)=>(
                                                    [item.image === '' ? '' :
                                                    <img src={`${item.image}`} className="exploreimage" alt="" />
                                                  ]

                                                  ))}
                                                  

                    {/* <img src={image} className='exploreimage' alt="" />
                    <img src={image1} className='exploreimage' alt="" />
                    <img src={image2} className='exploreimage' alt="" />
                    <img src={image3} className='exploreimage' alt="" />
                    <img src={image4} className='exploreimage' alt="" />
                    <img src={image5} className='exploreimage' alt="" />
                    <img src={image6} className='exploreimage' alt="" />
                    <img src={image} className='exploreimage' alt="" /> */}
                    


                   </div> 
            </div>
        </div> 
    )
}
