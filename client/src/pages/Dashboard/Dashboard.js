import React from "react";
import "./Dashboard.css"

const Dashboard = () => (
  <div className = "dashboard">
    <h1>Dashboard</h1>
      <p> Instructions: Once gift has been selected, please share tracking number </p>
    <h2> Receiver's Profile </h2>
      <div className = "interest-output"> className: interest-output </div>
      <div className = "personality-output"> className: personality-output </div>
  </div>
);

export default Dashboard;