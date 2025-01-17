import React, { useRef, useState } from "react";
import Table from "./Table";
import plus from "../assets/plus.png";
import { Link, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
const Container = () => {
  const [balence, setBalence] = useState(0);
  const [data, setData] = useState([]);
  const tableRef = useRef(null);
  const navigate = useNavigate();
  
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/")
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(tableRef.current);
    const wb = { Sheets: { Sheet1: ws }, SheetNames: ["Sheet1"] };
    XLSX.writeFile(wb, "table-data.xlsx");
  };

  return (
    <div className="main-container">
      <div className="info nav">
        <h2>
          <span style={{ color: "orange" }}>Expense</span>
          <span style={{ color: "lightgreen" }}>Traker</span>{" "}
        </h2>
        <div className="btns">
          <h4 className="exp-btn" onClick={exportToExcel}>
            Export
          </h4>
          <Link to="/login">
            <h4 className="log-btn" onClick={logOut}>
              Log-out
            </h4>
          </Link>
        </div>
      </div>
      <div>
        {" "}
        <h4 className="amount-label">
          Balence : <span style={{ color: "white" }}>{balence}/-</span>
        </h4>
      </div>
      <Table
        setBalence={setBalence}
        balence={balence}
        data={data}
        setData={setData}
        tableRef={tableRef}
      />
      <div className="add-expense">
        <img src={plus} alt="" />
        <Link to="/add">
          {" "}
          <p>Add Expense/Income</p>
        </Link>
      </div>
    </div>
  );
};

export default Container;
