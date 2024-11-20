import React from "react";
import TaskColumn from "./TaskColumn";
import "./taskboard.css";

const TaskBoard = () => {
  const taskData = [
    {
      name: "Company Description",
      points: [
        "Introduction to the company",
        "Executive summary",
        "Founder's bio",
      ],
      dueDate: "2024-12-01",
    },
    {
      name: "Market Plan",
      points: ["SWOT analysis", "Target market research", "Brand positioning"],
      dueDate: "2024-12-15",
    },
    {
      name: "Management and Organization",
      points: [
        "Founders",
        "Executive Team",
        "Board of Directors",
        "Team structure",
        "Key management roles",
        "Current balance sheet",
      ],
      dueDate: "2024-12-20",
    },
  ];

  return (
    <div className="taskboard-columns">
      <TaskColumn title="Task Name" tasks={taskData} />
      <TaskColumn title="Assignee" tasks={[]} />
      <TaskColumn title="Due Date" tasks={taskData} />
      <TaskColumn title="+" tasks={[]} />
    </div>
  );
};

export default TaskBoard;
