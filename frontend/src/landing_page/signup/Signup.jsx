import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{

      const res = await axios.post("https://zentro-production-5266.up.railway.app/register",{
        email,
        username,
        password
      });
      alert(res.data.message);
      window.location.href="https://69b7a9b655d43c3be769b0a2--zetro-dashboard.netlify.app/";
     

    }catch(err){
      console.log(err);
    }

  }

  return (

    <div className="container mt-5">

      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>

        <input 
        type="email"
        placeholder="Email"
        className="form-control mb-3"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input 
        type="text"
        placeholder="Username"
        className="form-control mb-3"
        onChange={(e)=>setUsername(e.target.value)}
        />

        <input 
        type="password"
        placeholder="Password"
        className="form-control mb-3"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="btn btn-primary">
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;
