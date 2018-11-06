import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import API from "../../utils/API";

class Login extends Component {

  state={
  loggedIn: '',
  email:'',
  password:''
  }

login = (state) => {
  if(this.state.loggedIn === true) {
    console.log("Youre already logged in");
  }
}


 handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

handleFormSubmit = (event)=>{
   event.preventDefault();


    API.loginFn(this.state)
    .then(res => {
      if (true) {
        console.log("logged in");
        this.state.loggedIn = true;
      }
    })
}

render() {

    return (
       <div style={{textAlign:"center"}}>
        <MuiThemeProvider>
          {/* <div>
            <AppBar title="Login" style={{background:"red"}}/>
          </div> */}
           <form style={{margin:"100px 25%",width:"50%",border:"2px dotted blue"}}>
                <TextField
                  name="email"
                  hintText="Enter your Username"
                  autoComplete="username"
                  floatingLabelText="Username"
                  onChange={this.handleInputChange}
                  />
                <br/>
                  <TextField
                    name="password"
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    autoComplete="current-password"
                    onChange={this.handleInputChange}
                    />
                  <br/>
                  <RaisedButton label="Login" primary={true} style={{margin:15}} onClick={this.handleFormSubmit}/>

            </form>
         </MuiThemeProvider>
        </div>
    );
  }
}

export default Login;
