import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks, onEdit, onDelete }) => {
  return (
    <div>
      <h3 >{title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onEdit={() => onEdit(task)} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskColumn;
