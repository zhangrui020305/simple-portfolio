import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Experience = () => {
  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={24} />
          <span>Back</span>
        </Link>
        <h1 className="page-title">EXPERIENCE</h1>
      </header>
      <div className="content-list">
        <div className="content-item">
          <h2>Full Stack Developer</h2>
          <p className="subtitle">Beijing GoodWill Corp</p>
          <p className="date">Nov.2025 - Present</p>
          <p className="description">
            Developed and maintained full-stack web applications using Spring Boot for the backend and React for the frontend. Designed and implemented RESTful APIs, ensuring high performance and scalability.
          </p>
        </div>
        <div className="content-item">
          <h2>Frontend Developer</h2>
          <p className="subtitle">Wuhan BigData</p>
          <p className="date">Nov.2023 - Jul.2024</p>
          <p className="description">
            Developed and maintained over 15 responsive frontend pages using React and TypeScript, serving over 1 million residents. Translated Figma mockups into pixel-perfect UIs, participated in Agile cycles, and refactored legacy code to improve maintainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
