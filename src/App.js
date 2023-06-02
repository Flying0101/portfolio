import React from 'react';
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
          </Routes>

        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
