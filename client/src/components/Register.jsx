import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/show.png";
import axios from "axios";
const Register = () => {

  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userName, setUserName] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const registerHandler = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:9700/user/register", {
        userName,
        userMail,
        userPassword,
      });
      alert(res.data);
      navigate('/login');
    } catch (err) {
      console.log(err);
      alert("Something went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login">
        <center>
          <h3 style={{ fontSize: "20px" }}>Register</h3>
        </center>
        <div className="field">
          <p>Enter Username </p>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
          <Link to="/login">
            <p style={{ fontSize: "14px" }}>Already I have Account.?</p>
          </Link>
        </center>
        <div className="login-btn">
          {!loading ? (
            <button onClick={registerHandler}>Register</button>
          ) : (
            <button style={{ background: "red" }}>Loading</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
