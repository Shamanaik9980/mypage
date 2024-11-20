import React from "react";
import "./TaskColumn.css";

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className="task-column">
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <div key={index} className="task">
          {title === "Due Date" ? (
            <p className="due-date">{task.dueDate}</p>
          ) : (
            <>
              <h4>{task.name}</h4>
              <ul>
                {task.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
              <button className="add-task-button">Add Task</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskColumn;
