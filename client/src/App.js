import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Landing from "./pages/Landing";
import RegisForm from "./pages/RegisForm";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


import './App.css'

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/registeration" component={RegisForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />

    </div>
  </Router>
);

export default App;


