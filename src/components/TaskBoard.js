import React from "react";
import { useNavigate } from "react-router-dom";
import "./taskboard.css";

const TaskBoard = () => {
  const navigate = useNavigate();

  const tasks = [
    {
      id: 1,
      name: "Instructions for Using the Template",
      assignees: [
        { name: "A", image: "https://i.pravatar.cc/150?img=10" },
        { name: "B", image: "https://i.pravatar.cc/150?img=20" },
        { name: "C", image: "https://i.pravatar.cc/150?img=30" },
      ],
      dueDate: "28 Nov, 2023",
      section: "Company Description",
    },
    {
      id: 2,
      name: "Executive Summary",
      assignees: [{ name: "D", image: "https://i.pravatar.cc/150?img=40" }],
      dueDate: "30 Nov, 2023",
      section: "Company Description",
    },
    {
      id: 3,
      name: "Founders Bio",
      assignees: [
        { name: "E", image: "https://i.pravatar.cc/150?img=45" },
        { name: "F", image: "https://i.pravatar.cc/150?img=48" },
      ],
      dueDate: "2 Dec, 2023",
      section: "Company Description",
    },
    {
      id: 4,
      name: "SWOT Analysis",
      assignees: [
        { name: "G", image: "https://i.pravatar.cc/150?img=49" },
        { name: "H", image: "https://i.pravatar.cc/150?img=50" },
      ],
      dueDate: "28 Nov, 2023",
      section: "Marketing Plan",
    },
    {
      id: 5,
      name: "Market Research",
      assignees: [{ name: "I", image: "https://i.pravatar.cc/150?img=58" }],
      dueDate: "30 Nov, 2023",
      section: "Marketing Plan",
    },
    {
      id: 6,
      name: "Product Positioning",
      assignees: [{ name: "J", image: "https://i.pravatar.cc/150?img=66" }],
      dueDate: "2 Dec, 2023",
      section: "Marketing Plan",
    },
    {
      id: 7,
      name: "Executive Team",
      assignees: [
        { name: "K", image: "https://i.pravatar.cc/150?img=45" },
        { name: "L", image: "https://i.pravatar.cc/150?img=49" },
      ],
      dueDate: "28 Nov, 2023",
      section: "Management and Organization",
    },
    {
      id: 8,
      name: "Board of Directors",
      assignees: [{ name: "M", image: "https://i.pravatar.cc/150?img=48" }],
      dueDate: "30 Nov, 2023",
      section: "Management and Organization",
    },
    {
      id: 9,
      name: "Capitalization Requirements",
      assignees: [{ name: "N", image: "https://i.pravatar.cc/150?img=58" }],
      dueDate: "2 Dec, 2023",
      section: "Management and Organization",
    },
  ];

  // Group tasks by section
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.section]) acc[task.section] = [];
    acc[task.section].push(task);
    return acc;
  }, {});

  const handleTaskClick = (id) => {
    navigate(`/task-details/${id}`);
  };

  return (
    <div className="taskboard">
      <div className="taskboard-header">
        <div className="header-cell">Task Name</div>
        <div className="header-cell">Assignee</div>
        <div className="header-cell">Due Date</div>
        <div className="header-cell add-btn">+</div>
      </div>
      {Object.keys(groupedTasks).map((section, index) => (
        <div key={index} className="taskboard-section">
          <h3 className="section-title">{section}</h3>
          {groupedTasks[section].map((task) => (
            <div
              key={task.id}
              className="task-row"
              onClick={() => handleTaskClick(task.id)}
            >
              <div className="task-cell">{task.name}</div>
              <div className="task-cell assignees">
                {task.assignees.map((assignee, i) => (
                  <img
                    key={i}
                    src={assignee.image}
                    alt={assignee.name}
                    className="assignee-image"
                  />
                ))}
              </div>
              <div className="task-cell">{task.dueDate}</div>
              <div className="task-cell">
                <button className="add-task-btn">+</button>
              </div>
            </div>
          ))}
          <button className="add-task">Add Task</button>
        </div>
      ))}
      <button className="add-stage">Add Stage</button>
    </div>
  );
};

export default TaskBoard;
