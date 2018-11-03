import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
// import Wrapper from "./components/Wrapper";
import Landing from "./pages/Landing";
import RegisForm from "./pages/RegisForm";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";

import './App.css'

const App = () => (
  <Router>
      <div>
      <Nav />
      <Route exact path="/" component={Landing}/>
      <Route exact path="/registration" component={RegisForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      </div>
  </Router>
);

export default App;


