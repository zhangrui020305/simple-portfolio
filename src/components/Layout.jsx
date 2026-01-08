import React from 'react';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
