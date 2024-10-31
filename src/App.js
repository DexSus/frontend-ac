import './styles/reset.css'
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/header/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
    </Router>
  );
}

export default App;
