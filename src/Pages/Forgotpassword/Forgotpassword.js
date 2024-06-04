// import { async } from '@firebase/util';
// import React, { useState } from 'react'

// export default function Forgotpassword() {
//   const [email , setEmail] = useState('');
// const handleclick = async(e)=>{
//   e.preventDefault();
//   await fetch(`http://localhost:5000/api/user/forgot/password` , {method:"POST" , headers:{"Content-Type":"application/JSON"} , body:JSON.stringify({email:email})}).then(()=>{
//     alert("We sent you a token email")
//   }).catch(()=>{
//     alert("Fail to proccess")
//   })
// }
//   return (
//     <div style={{width:"100vw" , height:"100vh", display:'flex' , alignItems:"center" , justifyContent:"center"}}>
//             <div style={{width:"25%" , padding:"20px" , margin:"auto" , borderRadius:"10px" , backgroundColor:"black"}}>    
//                 <p style={{color:"white"}}>Enter your Email</p>
//                 <form style={{display:"flex" , flexDirection:"column"}}>
//                     <input type={"text"} placeholder="Email" style={{flex:1 , minWidth:"40px" , margin:"10px 0px" , padding:"10px", borderRadius:"10px"}} onChange={(e)=>setEmail(e.target.value)} />
//                     <button style={{width:"40%" , border:"none" , padding:"10px 20px" , backgroundColor:"white" , color:"black" , borderRadius:"10px" , margin:"20px 0px" , cursor:"pointer"}} onClick={handleclick}>Send</button>
         
//                 </form>
//             </div>
//         </div>
//   )
// }























import React, { useState } from 'react';

export default function Forgotpassword() {
  const [email, setEmail] = useState('');
  
  const handleClick = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/user/forgot/password`, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({ email: email })
    })
      .then(() => {
        alert("We sent you a token email");
      })
      .catch(() => {
        alert("Failed to process");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <p style={styles.text}>Enter your Email</p>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Email"
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button style={styles.button} onClick={handleClick}>Send</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    background: 'url("https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") no-repeat center center fixed',
    backgroundSize: 'cover',
  },
  formContainer: {
    width: "25%",
    padding: "20px",
    margin: "auto",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  text: {
    color: "white",
    marginBottom: "20px",
    fontSize: "18px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    flex: 1,
    minWidth: "40px",
    margin: "10px 0px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "40%",
    border: "none",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "10px",
    margin: "20px 0px",
    cursor: "pointer",
    alignSelf: "center",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
