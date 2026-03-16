import React, { useState } from "react";
import axios from "axios";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e)=>{
  e.preventDefault();

  try{

    const res = await axios.post("https://zentro-production-5266.up.railway.app/login",{
      email,
      password
    });

    localStorage.setItem("token",res.data.token);

    window.location.href="/";

    alert("Login successful");

  }catch(err){
    console.log(err);
  }

}

return(

<div className="container mt-5">

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
className="form-control mb-3"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="form-control mb-3"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn btn-success">
Login
</button>

</form>

</div>

)

}

export default Login;
