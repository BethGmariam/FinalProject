import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';
class Loginscreen extends Component {
  // constructor(props){
  //   super(props);
  //   this.
    state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:false
    }
  // }

  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} key={this.props.parentContext}/>);
    var loginmessage = "Not registered yet, Go to Register";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }

  handleFormSubmit=(event) =>{
    event.preventDefault();
    var loginmessage;
    var loginscreen=[];

    if(this.state.isLogin){
      loginscreen.push(<Register parentContext={this} key={this.props.parentContext}/>);
      loginmessage = "Already registered.Go to Login";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      loginscreen.push(<Login parentContext={this} key={this.props.parentContext}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={{margin:15}} onClick={this.handleFormSubmit}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default Loginscreen;
