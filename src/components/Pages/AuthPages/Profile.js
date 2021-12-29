// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./styles.css";

const Profile = ({ history }) => {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.clear();
    setUserInfo("");
    history.push("/");
  };

  console.log(userInfo)

  return (
    <div className="container">
      <h1>My Profile</h1>
      <div className="inputcon">
        <span className="inputtext">Name :</span>
        <span>{userInfo && userInfo.name}</span>
      </div>
      <div className="inputcon">
        <span className="inputtext">Email :</span>{" "}
        <span>{userInfo && userInfo.email}</span>
      </div>
      <button className="btn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Profile;