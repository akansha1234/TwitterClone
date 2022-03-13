import React, { useState, useEffect } from "react";
import "./Profile.css";
import Navbar from "./Navbar.js";
const Profile = () => {
  const [profile, setProfile] = useState([]);
  const db2 = {
    id: 1,
    first_name: "Jolie",
    last_name: "Ferne",
    email: "jferne0@wesbite.com",
    gender: "Female",
    country: "Sweden"
  };
  useEffect(() => {
    const getData = async () => {
      const fetchfromserver = await fetchProfiles();
      setProfile(fetchfromserver);
    };
    getData();
  }, []);

  const fetchProfiles = async () => {
    const data = await fetch("https://tweets.free.beeceptor.com/profile");
    if (data.status === 200) {
      const result = await data.json();
      return result;
    } else {
      const res = db2;
      return res;
    }
  };
  return (
    <div className="profile-screen">
      <Navbar />
      <div className="profile">
        <h3>Profile Information</h3>
        <div className="profile_elem">
          <h3>First Name</h3>
          <p>{profile.first_name}</p>
        </div>
        <div className="profile_elem">
          <h3>Last Name</h3>
          <p>{profile.last_name}</p>
        </div>
        <div className="profile_elem">
          <h3>Email</h3>
          <p>{profile.email}</p>
        </div>
        <div className="profile_elem">
          <h3>Gender</h3>
          <p>{profile.gender}</p>
        </div>
        <div className="profile_elem">
          <h3>Country</h3>
          <p>{profile.country}</p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
