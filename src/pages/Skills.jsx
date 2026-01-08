import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Skills = () => {
  return (
    <div className="page-container fade-in">
      <header className="page-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={24} />
          <span>Back</span>
        </Link>
        <h1 className="page-title">SKILLS</h1>
      </header>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul className="skill-list">
            <li>React.js / Next.js</li>
            <li>Vue.js</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul className="skill-list">
            <li>Spring Boot(Java)</li>
            <li>Nest.js(Node.js)</li>
            <li>Python</li>
            <li>MyBaits-Plus</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <ul className="skill-list">
            <li>Git</li>
            <li>Restful API</li>
            <li>Markdown</li>
            <li>ECharts</li>
            <li>Docker</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
