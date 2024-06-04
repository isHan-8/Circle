import React from "react";
import "./profile.css";
import { useSelector } from 'react-redux'
import Navbar from "../../../component/Navbar/Navbar";
import ProfileLeftbar from "../../../component/ProfileLeftsidecontainer copy/ProfileLeftbar";
import ProfileMainPost from "../../../component/ProfileMainPostContainer copy/ProfileMainPost";
import ProfileRightbar from "../../../component/ProfileRightsideContainer copy/ProfileRightbar";

export default function Profile() {
    const userDetails = useSelector((state)=>state.user);
    let user = userDetails.user
    console.log(user)
  return (
    <div className="ProfileContainer">
      <Navbar />

      <div className="subProfileContainer">
        <ProfileLeftbar />
        <ProfileMainPost />
        <ProfileRightbar />
      </div>
    </div>
  );
}
