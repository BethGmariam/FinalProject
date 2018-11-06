import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Landing from "./pages/Landing";
import RegisForm from "./pages/RegisForm";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import ImageCard from "./components/ImageCard";

import './App.css'

const App = () => (
  <Router>
      <Wrapper>
      <Header> Secret Santa Gift Exchange </Header>
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route exact path="/registration" component={RegisForm} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
      <Footer/>
      </Wrapper>
  </Router>
);

export default App;
