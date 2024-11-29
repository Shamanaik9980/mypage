// src/components/TaskDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TaskDetails.css";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample task data (In real applications, fetch this data from an API)
  const tasks = [
    {
      id: 1,
      name: "Instructions for Using the Template",
      assignees: ["A", "B", "C"],
      dueDate: "28 Nov, 2023",
      description:
        "Detailed instructions on how to effectively use the business plan template.",
      status: "To Do",
      comments: [
        "Start with the executive summary.",
        "Ensure all sections are filled out.",
      ],
    },
    // Add other tasks similarly...
    {
      id: 2,
      name: "Executive Summary",
      assignees: ["D"],
      dueDate: "30 Nov, 2023",
      description: "A concise summary of the business plan.",
      status: "In Progress",
      comments: ["Draft the main points.", "Review with the team."],
    },
    // ... more tasks
  ];

  const task = tasks.find((t) => t.id === parseInt(id));

  if (!task) {
    return <div className="task-details">Task not found.</div>;
  }

  return (
    <div className="task-details">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back to Task Board
      </button>
      <h2 className="task-details-title">{task.name}</h2>
      <div className="task-info">
        <p>
          <strong>Description:</strong> {task.description}
        </p>
        <p>
          <strong>Status:</strong> {task.status}
        </p>
        <p>
          <strong>Due Date:</strong> {task.dueDate}
        </p>
        <p>
          <strong>Assignees:</strong>{" "}
          {task.assignees.map((assignee, index) => (
            <span key={index} className="assignee-badge">
              {assignee}
            </span>
          ))}
        </p>
        <div className="comments-section">
          <h3>Comments</h3>
          {task.comments.map((comment, index) => (
            <p key={index} className="comment">
              - {comment}
            </p>
          ))}
        </div>
      </div>
      <div className="task-actions">
        <button className="btn edit">Edit</button>
        <button className="btn delete">Delete</button>
      </div>
    </div>
  );
};

export default TaskDetails;
