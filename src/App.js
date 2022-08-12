import React from 'react';

// import Home from './components/Home';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

import Projects from './pages/projects';
import Main from './pages/main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {




  return (
    <Router>
      <div className="App">


        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
