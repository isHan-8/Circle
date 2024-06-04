// import React from 'react'
// import "./navbar.css";
// import searchIcon from "../Images/search.png";
// import Notifications from "../Images/bell.png";
// import Message from "../Images/message.png";
// import Profileimage from "../Images/Profile.png"
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../ReduxContainer/userReducer';
// export default function Navbar() {
//   const userDetails = useSelector((state)=>state.user);
//   let user = userDetails?.user
//   console.log(user);
//   let id = user?.other?._id;
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleLogout = ()=>{
//     dispatch(logout())
//     // windows.redirect('/login')
//     navigate('/login')
//   }
//   console.log(id);
//   return (
//     <div className='mainNavbar'>
//           <div className='LogoContainer'>
//                     <p>Circle</p>
//           </div>
//           <div>
//                     <div className='searchInputContainer'>
//                               <img src={`${searchIcon}`} className="searchIcon" alt="" />
//                               <input type="text" className='searchInput' placeholder='search your friends' name="" id="" />
//                     </div>
//           </div>
//           <div className='IconsContainer'>
//                     <img src={`${Notifications}`} className="Icons" alt="" />
//                     <img src={`${Message}`} className="Icons" alt="" />
//                     <Link to={`/Profile/${id}`}>
//                     <div style={{display:'flex' , alignItems:'center'}}>
//                               <img src={`${user?.other?.profile}`} className="ProfileImage" alt="" />
//                               <p style={{marginLeft:'5px'}}>{user?.other?.username}</p>
//                     </div>
//                     </Link>
//                     <div style={{marginRight:"30px" , marginLeft:"20px" , cursor:"pointer"}} onClick={handleLogout}>
//                       <p>Logout</p>
//                     </div>
//           </div>
//     </div>
//   )
// }














import React from 'react';
import "./navbar.css";
import searchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../ReduxContainer/userReducer';

export default function Navbar() {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  let id = user?.other?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className='mainNavbar'>
      <div className='LogoContainer'>
        <p>Circle</p>
      </div>
      <div>
        <div className='searchInputContainer'>
          <img src={searchIcon} className="searchIcon" alt="search" />
          <input type="text" className='searchInput' placeholder='Search your friends' />
        </div>
      </div>
      <div className='IconsContainer'>
        <img src={Notifications} className="Icons" alt="notifications" />
        <img src={Message} className="Icons" alt="messages" />
        <Link to={`/Profile/${id}`} className="usernameContainer">
          <img src={user?.other?.profile} className="ProfileImage" alt="profile" />
          <p className="username">{user?.other?.username}</p>
        </Link>
        <div className="logoutButton" onClick={handleLogout}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
