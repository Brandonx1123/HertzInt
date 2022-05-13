import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Component imports
import LandingPage from "./components/landingPage.js";
import Login from "./components/login.js";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import PrivateRoute from "./components/auth/privateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
