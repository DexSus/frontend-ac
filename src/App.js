import './styles/reset.css'
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { LendingPage } from './view/lending/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LendingPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
