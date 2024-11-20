import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Home</h2>
      <ul className="menu">
        <li>Inbox</li>
        <li>Reporting</li>
        <li>Portfolios</li>
        <li>TaskBoards</li>
        <li>Goals</li>
      </ul>
      <h3>Favorites</h3>
      <ul className="favorites">
        <li>Business Plan</li>
        <li>Project Strategy</li>
        <li>Web Design Plan</li>
      </ul>
      <h3>Docs</h3>
      <ul className="docs">
        <li>All docs</li>
        <li>Assigned to me</li>
        <li>Shared</li>
        <li>Private</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
