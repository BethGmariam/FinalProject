import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
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
      <Route exact path="/" component={Landing}/>
      <Route exact path="/registration" component={RegisForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />

    </div>
  </Router>
);

export default App;


