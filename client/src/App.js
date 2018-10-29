import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
// import Home from "./pages/Home";

import './App.css'



const App = () => (
  <Router>
    <div>
      <NavTabs />
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;

// import React from "react";
// import MainContainer from "./pages/MainContainer";

// const App = () => <MainContainer />;

// export default App;

