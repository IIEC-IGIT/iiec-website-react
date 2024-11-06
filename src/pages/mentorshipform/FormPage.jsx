import React, { useContext } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { ThemeContext } from '../contexts/ThemeContext'; // Assumes a theme context is set up

const FormPage = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  const pageStyles = {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme === 'iiec_dark' ? '#ffffff' : '#333333',
    backgroundColor: theme === 'iiec_dark' ? '#121212' : '#f0f0f0',
    minHeight: '100vh'
  };

  const comingSoonStyles = {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: theme === 'iiec_dark' ? '#333333' : '#ffffff',
    color: theme === 'iiec_dark' ? '#ffffff' : '#000000',
    borderRadius: '8px',
    boxShadow: theme === 'iiec_dark' ? '0px 0px 10px rgba(255, 255, 255, 0.2)' : '0px 0px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '600px'
  };

  return (
    <div style={pageStyles}>
      <Nav />  {/* Navigation bar at the top */}
      
      <div className="form-container" style={comingSoonStyles}>
        <h1>Contact Us</h1>
        <p style={{ fontSize: '1.2em', fontWeight: 'bold' }}>Coming Soon!</p>
        <p>We’re working hard to bring you a great experience. Stay tuned for updates!</p>
      </div>

      <Footer />  {/* Footer at the bottom */}
    </div>
  );
};

export default FormPage;
