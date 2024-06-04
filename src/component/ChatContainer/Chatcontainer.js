// import React from 'react'
// import "./ChatContainer.css"
// import profile from "../Images/image2.jpg"
// export default function Chatcontainer(currentChatUser) {
//   console.log(currentChatUser);
//   return (
//     <div className='MainChatContainer'>
//       <div>

//      <div style={{display:"flex",marginTop:"10px" , marginLeft:"30px" , backgroundColor:"rgb(241, 243,241)" , width:"70pc",padding:"5px", borderRadius:"10px"}}>
//      {/* yaha par user ki profile nhi a rahi hai thoda dekhna hai  */}
//       <img src={currentChatUser?.profile} className='userProfile' alt=''/>
//       <p style={{marginTop:"10px",marginLeft:"10px"}}>{currentChatUser?.username}</p>

//      </div>
//      <div className='msgContainer'>
//       <div className='msg' style={{display:"flex", alignItems:"center", marginLeft:"30px", backgroundColor:"rgb(241, 243,241)", marginTop:"10px", borderRadius:"10px",width:"40%"}}>
//        <img src={profile} className='chatuserprofile' alt='' />
//        <p className='msgtxt' >lorem jghg jgj hgjhg gkhgk jhjkhkj kjhkjhkj kjhjkhkjh jh jhh jhjhkjh jhjhjh hfhjfhg ghg  ghghghg jhg hgg hghgku    g uyg jh gjhjyhhjjg
//        </p>
//       </div>
//        <div style={{display:"flex", alignItems:"center", marginLeft:"30px", backgroundColor:"rgb(241, 243,241)", marginTop:"10px", borderRadius:"10px",width:"40%", marginLeft:"640px"}}>
//        {/* <img src={profile} className='chatuserprofile' alt='' /> */}
//        <p style={{textAlign:"start",marginLeft:"10px"}}>lorem jghg jgj hgjhg gkhgk jhjkhkj kjhkjhkj kjhjkhkjh jh jhh jhjhkjh jhjhjh hfhjfhg ghg  ghghghg jhg hgg hghgku    g uyg jh gjhjyhhjjg
//        </p>
//       </div>
//       <div style={{display:"flex", alignItems:"center", marginLeft:"30px", backgroundColor:"rgb(241, 243,241)", marginTop:"10px", borderRadius:"10px",width:"40%"}}>
//        <img src={profile} className='chatuserprofile' alt='' />
//        <p style={{textAlign:"start",marginLeft:"10px"}}>lorem jghg jgj hgjhg gkhgk jhjkhkj kjhkjhkj kjhjkhkjh jh jhh jhjhkjh jhjhjh hfhjfhg ghg  ghghghg jhg hgg hghgku    g uyg jh gjhjyhhjjg
//        </p>
//       </div>
//       <div style={{display:"flex", alignItems:"center", marginLeft:"30px", backgroundColor:"rgb(241, 243,241)", marginTop:"10px", borderRadius:"10px",width:"40%", marginLeft:"640px"}}>
//        {/* <img src={profile} className='chatuserprofile' alt='' /> */}
//        <p style={{textAlign:"start",marginLeft:"10px"}}>lorem jghg jgj hgjhg gkhgk jhjkhkj kjhkjhkj kjhjkhkjh jh jhh jhjhkjh jhjhjh hfhjfhg ghg  ghghghg jhg hgg hghgku    g uyg jh gjhjyhhjjg
//        </p>
//       </div> <div style={{display:"flex", alignItems:"center", marginLeft:"30px", backgroundColor:"rgb(241, 243,241)", marginTop:"10px", borderRadius:"10px",width:"40%"}}>
//        <img src={profile} className='chatuserprofile' alt='' />
//        <p style={{textAlign:"start",marginLeft:"10px"}}>lorem jghg jgj hgjhg gkhgk jhjkhkj kjhkjhkj kjhjkhkjh jh jhh jhjhkjh jhjhjh hfhjfhg ghg  ghghghg jhg hgg hghgku    g uyg jh gjhjyhhjjg
//        </p>
//       </div>

//      </div>
//      <div className='msgSenderContainer'>
//       <input style={{color:"white"}} type='text' placeholder='Write Your Messege to your Friend' name="" id =""  className='msginput'/>
//       <button className='msgbutton'>
//         Send
//       </button>
//      </div>
//      </div>
//       </div>
//   )
// }















// import React, { useEffect, useState } from 'react';
// import './ChatContainer.css';
// import profile from '../Images/image2.jpg';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// export default function ChatContainer({ currentChatUser }) {
//   // console.log(currentChatUser);
//   const userDetails = useSelector((state) => state.user);
//   let user = userDetails.user;
//   let id = user.other._id;
//   const[messege, setMessege] = useState('');
//   const accessToken = user.accessToken;
  

// useEffect(() => {
//   const getmessege = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/post/get/chat/msg/${id}/${currentChatUser._id}`, {
//         headers: {
//           token: accessToken,
//         },
//       });
//       setMessege(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   getmessege();
// }, [currentChatUser._id])
// console.log(messege);
//   return (
//     <div className='MainChatContainer'>
//       <div>
//         <div style={{ display: 'flex', marginTop: '10px', marginLeft: '30px', backgroundColor: 'rgb(241, 243, 241)', width: '70%', padding: '5px', borderRadius: '10px' }}>
//           <img src={currentChatUser?.profile || profile} className='userProfile' alt='User Profile' />
//           <p style={{ marginTop: '10px', marginLeft: '10px' }}>{currentChatUser?.username}</p>
//         </div>
//         <div className='msgContainer'>
//           {messege && messege.map((item)=>(

//             <div className='msg' style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', backgroundColor: 'rgb(241, 243, 241)', marginTop: '10px', borderRadius: '10px', width: '40%' }}>
//             <img src={profile} className='chatuserprofile' alt='Chat User' />
//             <p className='msgtxt'>{item?.messege}</p>
//           </div>
//           ))}
          
//           </div>
//         <div className='msgSenderContainer'>
//           <input style={{ color: 'white' }} type='text' placeholder='Write Your Message to your Friend' className='msginput' />
//           <button className='msgbutton'>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }







































import React, { useEffect, useRef, useState } from 'react';
import './ChatContainer.css';
import profile from '../Images/image2.jpg';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {io} from 'socket.io-client';

export default function ChatContainer({ currentChatUser }) {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails.user;
  let id = user.other._id;
  const scrollRef = useRef();
  const socket = useRef();
  const [messege, setMessege] = useState('');
  const accessToken = user.accessToken;
  const [inputmessege, setinputmessege] = useState('');
  const [arrivalMessege , setarrivalMessege] = useState(null);
  useEffect(() => {
    if (currentChatUser) {
      const getmessege = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/post/get/chat/msg/${id}/${currentChatUser._id}`, {
            headers: {
              token: accessToken,
            },
          });
          setMessege(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      getmessege();
    } 
  }, [currentChatUser, id, accessToken]);
useEffect(() => {
  if(currentChatUser !== ""){
   socket.current = io("http://localhost:3000");
   socket.current.emit("addUser" , id);
  }
},[id]);

console.log(socket);


  useEffect(() => {
     scrollRef.current?.scrollIntoView({behavior:"smooth"})
  },[messege])
  const sendmsg = async () => {
    const messeges = {
      myself: true,
      messege: inputmessege,
    };
          socket.current.emit("send-msg" , {
            to:currentChatUser._id,
            from: id,
            messege:inputmessege
          });
    try {
      await fetch(`http://localhost:5000/api/post/msg`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'token': accessToken
        },
        body: JSON.stringify({
          from: id,
          to: currentChatUser._id,
          messege: inputmessege
        })
      });

      setMessege([...messege, messeges]);
      setinputmessege('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
useEffect(() => {
  if(socket.current){
      socket.current.on("msg-receive" , (msg)=>  {
        console.log(msg);
        setarrivalMessege({myself:false , messege:msg})
      })
  }
}, [arrivalMessege]);

useEffect(() => {
  arrivalMessege && setMessege((pre) => [...pre , arrivalMessege])
},[arrivalMessege]);

  return (
    <div className='MainChatContainer'>
      <div>
        <div style={{ display: 'flex', marginLeft: '30px', backgroundColor: 'rgb(241, 243, 241)', width: '70%', padding: '5px', borderRadius: '10px' }}>
          <img src={currentChatUser?.profile || profile} className='userProfile' alt='User Profile' />
          <p style={{ marginTop: '10px', marginLeft: '10px' }}>{currentChatUser?.username}</p>
        </div>
        <div className='msgContainer'>
          {messege && messege.map((item, index) => (
            <div ref ={scrollRef} >
              {item.myself === false ?
            <div key={index} className='msg'>
              <img src={currentChatUser?.profile} className='chatuserprofile' alt='Chat User' />
              <p className='msgtxt'>{item?.messege}</p>
            </div>:
             <div style={{display:"flex", alignItems:"center", marginLeft:"30px", backgroundColor:"rgb(241, 243,241)", marginTop:"10px", borderRadius:"10px",width:"40%"}}>
             {/* <img src={profile} className='chatuserprofile' alt='' /> */}
              <p style={{textAlign:"start",marginLeft:"10px"}}>{item?.messege}
             </p>
             </div>
              }
            </div>
          ))}

    </div>
    <div className='msgSenderContainer'>
          <input style={{ color: 'white' }} type='text' placeholder='Write Your Message to your Friend' onChange={(e) => setinputmessege(e.target.value)} value={inputmessege} className='msginput' />
          <button className='msgbutton' onClick={sendmsg}>Send</button>
        </div>
      </div>
    </div>
  );
}
