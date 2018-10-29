
import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

class MainContainer extends Component {
  state = {
    currentPage: "Landing"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  myFun = () =>{
    let page = this.state.currentPage
    switch(page){
      case "Landing":
       return <Landing />
      case "Registration":
       return <Registration />
      case "Login":
       return <Login />
      case "Dashboard":
       return <Dashboard />
    }
  } 


  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
        {this.myFun()}
      </div>
    );
  }
}

export default MainContainer;
