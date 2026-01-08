import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

const Project = () => {
  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={24} />
          <span>Back</span>
        </Link>
        <h1 className="page-title">PROJECT</h1>
      </header>
      <div className="content-grid">
        <div className="project-card">
          <h2>Airbnb-clone</h2>
          <p>A comprehensive Airbnb clone featuring property listings, booking management, and user authentication. Built with React and Material UI to ensure a responsive and polished user experience across all devices.</p>
          <div className="project-links">
            <a href="#" className="p-link"><Github size={20} /></a>
            <a href="#" className="p-link"><ExternalLink size={20} /></a>
          </div>
        </div>
        <div className="project-card">
          <h2>AI Stock Analyzer</h2>
          <p>An intelligent financial dashboard that leverages machine learning to analyze historical stock data and predict market trends. Features interactive charts for real-time data visualization.</p>
          <div className="project-links">
            <a href="#" className="p-link"><Github size={20} /></a>
            <a href="#" className="p-link"><ExternalLink size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
