import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const sections = [
    { title: 'EDUCATION', path: '/education' },
    { title: 'EXPERIENCE', path: '/experience' },
    { title: 'PROJECT', path: '/project' },
    { title: 'SKILLS', path: '/skills' },
  ];

  return (
    <div className="home-container">
      <header className="profile-header">
        <h1 className="profile-name">RUI ZHANG</h1>
        <div className="profile-contact">
          <span>+61 401 045 819</span>
          <span className="separator">•</span>
          <span>zhangrui020305@gmail.com</span>
        </div>
      </header>

      <nav className="vertical-nav">
        {sections.map((section) => (
          <Link key={section.title} to={section.path} className="nav-item">
            {section.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Home;
