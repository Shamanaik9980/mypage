import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskBoard from "../components/TaskBoard";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <TaskBoard />
      </div>
    </div>
  );
};

export default Dashboard;
