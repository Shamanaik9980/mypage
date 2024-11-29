import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import "./index.css"; // Global styles

const App = () => {
  return (
    <Router basename="/mypage">
      {" "}
      {/* Add basename here */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/task-details/:id" element={<TaskDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
