import React from "react";
import "./MonitorBar.css";

const MonitorBar = ({
  tasks,
  taskView,
  handleClearCompleted,
  handleViewChange,
}) => {
  return (
    <div className="monitor-bar">
      <div className="task-number">
        <span>{tasks.length} Item left</span>
      </div>
      <div className="filter">
        <span
          onClick={() => handleViewChange("all")}
          className={taskView === "all" ? "all checked" : "all"}
        >
          All
        </span>
        <span
          onClick={() => handleViewChange("active")}
          className={taskView === "active" ? "active checked" : "all"}
        >
          Active
        </span>
        <span
          onClick={() => handleViewChange("completed")}
          className={taskView === "completed" ? "all checked" : "all"}
        >
          Completed
        </span>
      </div>
      <div className="clear-completed" onClick={handleClearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default MonitorBar;
