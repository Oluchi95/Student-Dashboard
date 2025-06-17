import React from 'react';
import '../styles/Card.css'; 

const RecommendationCard = ({ recommendation }) => {
  return (
    <div className="card recommendation-card">
      <h3>{recommendation.title}</h3>
      <p>Type: {recommendation.type}</p>
      <p>Reason: {recommendation.reason}</p>
      <button className="button-primary">View Details</button>
    </div>
  );
};

export default RecommendationCard;