import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskBoard from "../components/TaskBoard";
import "./Dashboard.css"; // Dashboard-specific styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <TaskBoard />{" "}
        {/* Display TaskBoard or any other relevant component here */}
      </div>
    </div>
  );
};

export default Dashboard;
