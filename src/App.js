import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import React from 'react'

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  function toggleButton() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className="container">
      <Navbar darkMode={darkMode} togglerDarkMode={toggleButton} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
