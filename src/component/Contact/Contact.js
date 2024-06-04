// import React, { useEffect, useState } from "react";
// import "./contact.css";
// import profile from "../Images/image2.jpg";
// import Chatcontainer from "../ChatContainer/Chatcontainer";
// import { useSelector } from "react-redux";
// import axios from "axios";
// export default function  Contact() {
//   const userDetails = useSelector((state)=>state.user);
//   let user = userDetails.user;
//   let id = user.other._id;
//   const accessToken = user.accessToken;
//   const[users , setusers] = useState();
//   const [currentChatUser , setcurrentChatUser] = useState();
//   console.log(id);
//   console.log(accessToken);
//   useEffect(() => {
//     const getuser = async()=>{
//      try {
//        const res = await axios.get(`http://localhost:5000/api/post/following/${id}` , {
//          headers:{
//            token:accessToken
//          }
//        })
//        setusers(res.data);
//      } catch (error) {
       
//      }
//     }
//     getuser();
//    }, [])
// //  console.log(users);
//  const handleUser = (e) =>{
//   setcurrentChatUser(e);
//  }
//   return (
//     <div className="mainContactContainer">
//       <div>
//         <div style={{ width: "290px", padding: "10px" }}>
//           <input
//             type="search"
//             placeholder="Search your friends"
//             className="searchbarforcontact"
//           />
//         </div>
        
//         <div className="usersDetailConatiner">
//           {users?.map((item)=> (
//             <div>
// {item?._id !== id ? 

//           <div className="userContainer" onClick={(e)=> handleUser(item)}>
          
//             <img src={item?.profile} className="Chatuserimage" alt="" />
//             <div style={{ marginLeft: "10px" }}>
//               <p  
//                 style={{
//                   color: "black",
//                   textAlign: "start",
//                   marginTop: "5px",
//                   fontSize: "15px",
//                 }}
//               >
//                 {item?.username}
//               </p>
//               <p
//                 style={{
//                   color: "black",
//                   textAlign: "start",
//                   marginTop: "-16px",
//                   fontSize: "14px",
//                 }}
//               >
//                 open your messege
//               </p>
//             </div>
//           </div>: ""
//           }
//           </div>
//             ))}

//         </div>
//       </div>
//       <Chatcontainer currentChatUser = {currentChatUser}/>
//     </div>
//   );
// }

















import React, { useEffect, useState } from 'react';
import './contact.css';
import profile from '../Images/image2.jpg';
import ChatContainer from '../ChatContainer/Chatcontainer.js';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function Contact() {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  let id = user.other._id;
  const accessToken = user.accessToken;
  const [users, setUsers] = useState([]);
  const [currentChatUser, setCurrentChatUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/post/following/${id}`, {
          headers: {
            token: accessToken,
          },
        });
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [id, accessToken]);

  const handleUser = (user) => {
    setCurrentChatUser(user);
  };

  return (
    <div className='mainContactContainer'>
      <div>
        <div style={{ width: '290px', padding: '10px' }}>
          <input
            type='search'
            placeholder='Search your friends'
            className='searchbarforcontact'
          />
        </div>

        <div className='usersDetailConatiner'>
          {users?.map((item) => (
            <div key={item._id}>
              {item?._id !== id && (
                <div className='userContainer' onClick={() => handleUser(item)}>
                  <img src={item?.profile || profile} className='Chatuserimage' alt='' />
                  <div style={{ marginLeft: '10px' }}>
                    <p style={{ color: 'black', textAlign: 'start', marginTop: '5px', fontSize: '15px' }}>
                      {item?.username}
                    </p>
                    <p style={{ color: 'black', textAlign: 'start', marginTop: '-16px', fontSize: '14px' }}>
                      Open your message
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {currentChatUser !== "" ?
      
      <ChatContainer currentChatUser={currentChatUser} />: <div>
        <p>  Open Your Chat Messege with your Friends </p>
      </div>
    }
      </div>
  );
}
