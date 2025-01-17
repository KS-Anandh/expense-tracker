import React, { useEffect, useState } from "react";
import cross from "../assets/remove.png";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const Add = () => {
  const navigate=useNavigate()
  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState('income');
  const [desc, setDesc] = useState(null);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
    return navigate("/login");
    }
  },[]);
  const addHandler=async()=>{
    setLoading(true)
    try{
      const token=localStorage.getItem("token")
      const res=await axios.post("http://localhost:9700/data/add",{amount,category,description:desc},{headers:{Authorization :`Bearer ${token}`}})
      alert(res.data)
      navigate('/')
    }
    catch(err){
      console.log(err);
      alert("something went wrong")
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <div className="login add">
        <h4>Expense/Income</h4>
        <Link to="/">
          {" "}
          <img src={cross} alt="" className="cross-img" />
        </Link>
        <div className="field">
          <p>Enter Amount </p>
          <input
            type="text"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="field">
          <p>select Category</p>
          <select onChange={(e)=>setCategory(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="field">
          <p>Description </p>
          <input
            type="text"
            placeholder="Description (optional) "
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        {
          loading?<button style={{backgroundColor:"red"}}>Loading..</button>:<button onClick={addHandler}>Add</button>
        }
      </div>
    </div>
  );
};

export default Add;
