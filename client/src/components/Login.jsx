import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/show.png";
import axios from "axios";
const Login = () => {
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const loginHandler = async() => {
    setLoading(true)
    try{
      const res=await axios.post("https://ex-traker.vercel.app/user/login",{userMail, userPassword});
      console.log(res.data)
      localStorage.setItem("token",res.data.token);
      navigate("/")
    }
    catch(err){
      console.log(err);
      alert("Invalid Credentials")
    }
    finally{
      setLoading(false)
    }
   
  };

  return (
    <div className="container">
      <div className="login">
        <center>
          <h3 style={{ fontSize: "20px" }}>Login</h3>
        </center>
        <div className="field">
          <p>Enter Your Mail </p>
          <input
            type="gmail"
            placeholder="Enter Your Mail"
            onChange={(e) => setUserMail(e.target.value)}
          />
        </div>
        <div className="field">
          <p>Enter Your Password </p>
          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <img
              src={img}
              alt=""
              width={20}
              height={25}
              onClick={() => setShowPassword((e) => !e)}
            />
          </div>
        </div>
        <center style={{ color: "blue" }}>
          <Link to="/register">
            <p style={{ fontSize: "14px" }}>I don't have Account.?</p>
          </Link>
        </center>
        <div className="login-btn">
          {!loading ? (
            <button onClick={loginHandler}>Login</button>
          ) : (
            <button style={{ background: "red" }}>Loading</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
