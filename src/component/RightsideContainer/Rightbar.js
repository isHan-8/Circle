import React, { useEffect, useState } from 'react';
import './rightbar.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Follow from './Follow';
 import { useNavigate } from 'react-router-dom';
 import ads from "../Images/ads.jpg";
 import image1 from "../Images/image3.jpg";


export default function Rightbar() {
  const userDetails = useSelector((state) => state.user);
  let user = userDetails?.user;
  const id = user?.other?._id;

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/all/user/${id}`
        );
        setUsers(res.data);
      } catch (error) {
        console.log("Some error occurred");
      }
    };
    getUsers();
  }, [id]);
  const navigate = useNavigate();

  const onCreate = () => {
    // Logic to create a new post
    console.log('Create new post');
    navigate('/news'); // Change '/new-page' to the path of the component or page you want to redirect to
  };

  const onEdit = (postId) => {
    // Logic to edit a post
    console.log('Edit post', postId);
  };

  const onDelete = (postId) => {
    // Logic to delete a post
    console.log('Delete post', postId);
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
//     <div className='rightbar'>
//       <div className='rightcontainer'>
//         <button className="createPostButton" onClick={onCreate}>
//          get news update
//         </button>

//         {posts.map((post, index) => (
//           <div key={index} className='adsContainer'>
//             <img src={post.image} className="adsimg" alt="" />
//             <div>
//               <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>{post.title}</p>
//               <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>{post.description}</p>
//             </div>
//             <div className="postActions">
//               <button className="edit" onClick={() => onEdit(post.id)}>Edit</button>
//               <button className="delete" onClick={() => onDelete(post.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className='rightcontainer2'>
//         <h3 style={{ textAlign: "start", marginLeft: "10px" }}>Suggested for you</h3>
//         {users.map((item) => (
//           <Follow key={item._id} userdetails={item} />
//         ))}
//       </div>
//     </div>
//   );
// }



// // import React, { useEffect, useState } from 'react';
// // import './rightbar.css';
// // import './follow.css';
// // import axios from 'axios';
// // import { useSelector } from 'react-redux';
// // import Follow from './Follow';
// // import News from '../news/News';
// // // import Navbar from './Navbar'; // Import the Navbar component

// // export default function Rightbar() {
// //   const userDetails = useSelector((state) => state.user);
// //   let user = userDetails?.user;
// //   const id = user?.other?._id;

// //   const [users, setUsers] = useState([]);
// //   const [mynews, setMyNews] = useState([]); // New state for storing news data

// //   useEffect(() => {
// //     const getUsers = async () => {
// //       try {
// //         const res = await axios.get(
// //           `http://localhost:5000/api/user/all/user/${id}`
// //         );
// //         setUsers(res.data);
// //       } catch (error) {
// //         console.log("Some error occurred");
// //       }
// //     };
// //     getUsers();
// //   }, [id]);

// //   useEffect(() => {
// //     const getNews = async () => {
// //       try {
// //         const res = await axios.get(
// //           'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY'
// //         );
// //         setMyNews(res.data.articles);
// //       } catch (error) {
// //         console.log("Error fetching news:", error);
// //       }
// //     };
// //     getNews();
// //   }, []);

// //   return (
// //     <div>
// //       {/* <News /> Render the News component */}
// //       <div className='rightbar'>
// //         <div className='rightcontainer'>
// //           <div className="rightcontainer1">
// //             <h3 style={{ textAlign: "start", marginLeft: "10px" }}>Suggested for you</h3>
// //             {users.map((item) => (
// //               <Follow key={item._id} userdetails={item} />
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mainDiv">
// //           {mynews.map((ele) => {
// //             return (
// //               <div class="card" style={{ marginTop: "2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
// //                 <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} class="card-img-top" alt="..." />
// //                 <div class="card-body">
// //                   <h5 class="card-title">{ele.author == "" ? "Janelle Ash" : ele.author}</h5>
// //                   <p class="card-text">
// //                     {ele.title}
// //                   </p>
// //                   <a href={ele.url} target="_blank" class="btn btn-primary">
// //                     Read More
// //                   </a>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }











<div className='rightbar'>
<div className='rightcontainer'>
  <div className='adsContainer'>
    <img src={`${ads}`} className="adsimg" alt="" />
    <div>
      <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
      <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
    </div>
  </div>
  <div className='adsContainer'>
    <img src={`${image1}`} className="adsimg" alt="" />
    <div>
      <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
      <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
    </div>
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