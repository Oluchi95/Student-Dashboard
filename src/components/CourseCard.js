import React from 'react';
import '../styles/Card.css'; 
const CourseCard = ({ course }) => {
  return (
    <div className="card course-card">
      <h3>{course.title}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Completed On: {course.dateCompleted}</p>
      <span className="badge completed">Completed</span>
    </div>
  );
};

export default CourseCard;