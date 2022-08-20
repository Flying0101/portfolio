import React from 'react';


import Projects from './pages/projects';
import Main from './pages/main';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';
function App() {




  return (
    <RecoilRoot>
      <Router>
        <div className="App">


          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projects/:id" element={<Projects />}></Route>
          </Routes>

        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
