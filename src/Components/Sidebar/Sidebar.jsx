import React from "react";
import Profile from "../../assets/Profile.jpg";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
const Navigate = useNavigate()

  return (
    <div className="Sidebar">
      <div className="profile" onClick={()=>{Navigate("./Profile")}}>
        <img src={Profile} alt="profile img" />
        <h2>Profile name</h2>
      </div>
      <div onClick={()=>{Navigate("./")}}>
        <h2>Home</h2>
      </div>
      <div onClick={()=>{Navigate("./Parties")}}>
        <h2>Parties</h2>
      </div>
      <div>
        <h2>Profile</h2>
      </div>
    </div>
  );
};

export default Sidebar;
