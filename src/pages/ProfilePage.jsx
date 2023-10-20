import React from "react";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome to your profile page!</p>
    </div>
  );
}

export default ProfilePage;
