import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseCard from './components/CourseCard';
import TaskCard from './components/TaskCard';
import RecommendationCard from './components/RecommendationCard';
import { completedCourses, upcomingTasks, recommendations } from './data/mockData';
import './styles/App.css'; // styles for the main app
import './styles/Dashboard.css'; // specific styles for dashboard

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="dashboard-main">
        <section className="dashboard-section" id="completed">
          <h2>Completed Courses</h2>
          <div className="card-grid">
            {completedCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <section className="dashboard-section" id="upcoming">
          <h2>Upcoming Learning Tasks</h2>
          <div className="card-grid">
            {upcomingTasks.map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </section>

        <section className="dashboard-section" id="recommendations">
          <h2>Personalized Recommendations</h2>
          <div className="card-grid">
            {recommendations.map(rec => (
              <RecommendationCard key={rec.id} recommendation={rec} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;