import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Landing from "./pages/Landing";
import RegisForm from "./pages/RegisForm";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";



import './App.css'

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Route exact path="/" component={Landing}/>
      <Route exact path="/registration" component={RegisForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </Wrapper>
  </Router>
);

export default App;


