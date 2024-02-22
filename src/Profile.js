import React from "react";
import './Profile.css'
import { selectUser } from "./userSlice";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
        <h2>Edit Profile</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        {user && (
            user.email
        )}
      <h4 onClick={() => auth.signOut()}>logout</h4>
    </div>
  );
}

export default Profile;
