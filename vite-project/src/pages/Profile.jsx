import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert("Failed to logout");
    }
  };

  const handleUpdateProfile = () => {
    alert("Update Profile feature coming soon!");
    // Or navigate("/update-profile") if you build that page
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4">👤 My Profile</h2>
      <div className="card p-4 shadow">
        <div className="text-center">
          <img
            src={currentUser?.photoURL || "https://via.placeholder.com/100"}
            alt="User"
            className="rounded-circle mb-3"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <p><strong>Name:</strong> {currentUser?.displayName || "No name provided"}</p>
        <p><strong>Email:</strong> {currentUser?.email}</p>

        <button className="btn btn-primary mt-3" onClick={handleUpdateProfile}>
          Update Profile
        </button>

        <button className="btn btn-danger mt-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
