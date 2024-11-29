// src/pages/TaskDetailsPage.jsx
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskDetails from "../components/TaskDetails";
import "./Dashboard.css";

const TaskDetailsPage = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <TaskDetails />
      </div>
    </div>
  );
};

export default TaskDetailsPage;
