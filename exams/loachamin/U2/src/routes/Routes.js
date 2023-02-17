import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "../pages/principal";
import FormUsers from "../pages/userForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Principal />} />
        <Route exact path="/usersForm" element={<FormUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
