import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Education = () => {
  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={24} />
          <span>Back</span>
        </Link>
        <h1 className="page-title">EDUCATION</h1>
      </header>
      <div className="content-list">
        <div className="content-item">
          <h2>University of New South Wales</h2>
          <p className="subtitle">Master of Information Technology</p>
          <p className="date">2024 - 2026</p>
          <p className="description">
            Relevant coursework: Web Front End Programming, Software Construction and Tools, Computer Networks.
          </p>
        </div>
        <div className="content-item">
          <h2>Hubei Engeering University</h2>
          <p className="subtitle">Bachelor of Computer Science</p>
          <p className="date">2020 - 2024</p>
          <p className="description">
            Relevant coursework: Spring Boot, Node.js Programming, Java, Database, Data Structure and Algorithm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
