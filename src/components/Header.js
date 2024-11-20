import React from "react";
import "./Header.css"; // Updated CSS file

const Header = () => {
  return (
    <header className="header">
      {/* First Row */}
      <div className="first-row">
        <div className="logo">
          <div className="circle"></div>
        </div>
        <nav>
          <ul>
            <li>Team</li>
            <li>Enterprise</li>
            <li>Explore</li>
            <li>Marketplace</li>
            <li>Pricing</li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="icons">
          <i className="fas fa-chart-bar"></i>
          <i className="fas fa-globe"></i>
        </div>
        <div className="user">
          <div className="user-info">
            <span className="user-initials">MH</span>
            <sup>2</sup>
            <span className="user-name">Esther Howard</span>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <button className="new-chat">New Chat</button>
      </div>

      {/* Second Row */}
      <div className="second-row">
        <div className="user-profile">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2200214153/display_1500/stock-photo-confident-rich-eastern-indian-business-man-executive-standing-in-modern-big-city-looking-and-2200214153.jpg"
            alt="User Profile"
          />
          <span>Good Day</span>
          <span>Michial D.</span>
          <i className="fas fa-user"></i>
          <i className="fas fa-cog"></i>
        </div>
        <div className="actions">
          <button className="list-button">
            <i className="fas fa-list"></i>
          </button>
          <h4>
            <span>Business Plan</span>
          </h4>
          <button className="edit-button">
            <i className="fas fa-edit"></i>
          </button>
          <button className="info-button">
            <i className="fas fa-info-circle"></i>
          </button>
          <button className="heart-button">
            <i className="fas fa-heart"></i>
          </button>
          <button className="board-view">Board View</button>
          <button className="list-view">List View</button>
          <button className="time-line">Timeline</button>
          <button className="calendar">Calendar</button>
          <button className="messages">Messages</button>
          <button className="files">Files</button>
          <button className="share-button">
            <i className="fas fa-unlock-alt"></i> Share
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
