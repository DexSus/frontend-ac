import "./styles/reset.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LendingPage } from "./view/lending/index";
import { SingInPage } from "./view/singIn/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="/login" element={<SingInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
