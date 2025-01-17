import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Table = ({setBalence,data,setData,tableRef}) => {
  
 
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
    return navigate("/login");
    }
    getData();
    calculate();
  },[data]);

  const calculate=()=>{
    let balenece=0;
    data.forEach((item)=>{
      if(item.category==='income'){
        balenece=balenece+item.amount;
      }
      else{
        balenece=balenece-item.amount;
      }
    })
    setBalence(balenece)
  }
  const getData=async()=>{
    try{
      const token= localStorage.getItem('token')
     const res=await axios.get("https://ex-traker.vercel.app/data/",{headers:{Authorization :`Bearer ${token}`}})
     if (JSON.stringify(res.data) !== JSON.stringify(data)) {
      setData(res.data);
    }
     }
     catch(err){
       console.log(err)
     }
  }

  const deleteHandler=async(id)=>{
    try{
      const token=localStorage.getItem('item');
      const res=await axios.delete(`https://ex-traker.vercel.app/data/remove/${id}`)
      alert(res.data)
      const filteredData=data.filter((item)=>item._id!=id)
      setData(filteredData)
    }
    catch(err){
      console.log(err)
    }
    
  }
  return (
    <div className="main-container">
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
            <th>SN</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.amount}</td>
                  <td>{item.category}</td>
                  <td>{item.description}</td>
                  <td className="delete-btn" onClick={()=>deleteHandler(item._id)}>Delete</td>
                </tr>
                )
              })
            }

          </tbody>
        </table>
        {
          data.length==0?<center style={{width:"100%",padding:"20px"}}>-- No Transactions Yet --</center>:""
        }
        
      </div>
    </div>
  );
};

export default Table;
