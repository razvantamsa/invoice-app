import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Invoice from './Invoice';
import Home from './Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/invoice" Component={Invoice} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
