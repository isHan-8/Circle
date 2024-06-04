import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Home/Profile/Profile';
import { Link } from 'react-router-dom';
import Login from './Pages/Login/login';
import Signup from './Pages/Register/signup';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// import your route components too
import { useSelector } from 'react-redux';
import Resetpassword from './Pages/Register/Resetpassword/Resetpassword';
import Verifyemail from './Pages/Register/VerifyEmail/Verifyemail';
import Forgotpassword from './Pages/Forgotpassword/Forgotpassword';
import Chat from './Pages/Chat/Chat';
import News from './component/news/News';

 
function App() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails?.user
  console.log(user);
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={ user?.other?.verifed === true ? <Home/> : <Navigate to={"/login"} replace={true}/>}></Route>
      <Route path ='/Profile/:id'  element =  {<Profile />}></Route>
      <Route path="/login" element={ user?.other?.verifed === true ? <Navigate to={"/"} replace={true}/> : <Login />}></Route>
      <Route path ='/signup'  element ={  <Signup />}></Route>
      <Route path="/verify/email" element={user?.Status === 'Pending' ? <Verifyemail/> : user?.other?.verifed === true ? <Navigate to={"/"} replace={true}/> : <Login/>}></Route>
        <Route path="/forgot/password" element={<Forgotpassword/>}></Route>
        <Route path="/reset/password" element={<Resetpassword/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        </Routes> 

    </BrowserRouter>
    </div>
  );
}

export default App;
