import React from "react";
import Contact from "../../component/Contact/Contact";
import Chatcontainer from "../../component/ChatContainer/Chatcontainer";
import Navbar from "../../component/Navbar/Navbar";

export default function Chat() {
  return (
  <div>

        <Navbar/>
        <div style={{display: "flex"}}>
              <Contact />
              {/* <Chatcontainer /> */}
              </div>
     
    </div>
  );
}
