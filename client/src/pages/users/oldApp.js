import React, { Component } from 'react';
// import Registration from './pages/Registration/registration';
import './App.css';
import Loginscreen from './Loginscreen'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

class oldApp extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this} key={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="oldApp" key={this}>
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default oldApp;