import React from 'react';
import '../styles/Card.css';

const TaskCard = ({ task }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'priority-high';
      case 'Medium': return 'priority-medium';
      case 'Low': return 'priority-low';
      default: return '';
    }
  };

  return (
    <div className="card task-card">
      <h3>{task.title}</h3>
      <p>Course: {task.course}</p>
      <p>Due Date: {task.dueDate}</p>
      <span className={`badge ${getPriorityClass(task.priority)}`}>{task.priority} Priority</span>
    </div>
  );
};

export default TaskCard;