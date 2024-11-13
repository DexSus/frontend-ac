import "./styles/reset.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LendingPage } from "./view/lending/index";
import { SingInPage } from "./view/singIn/index";
import { AdminPage } from "./view/administrator";
import { AcceptedPage } from "./view/accepted";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="/login" element={<SingInPage />} />
        <Route path="/adminPanels" element={<AdminPage />} />
        <Route path="/accepted" element={<AcceptedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
