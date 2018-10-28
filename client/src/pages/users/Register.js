import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import API from "../../utils/API";


class Register extends Component {

    state={
      first_name:'',
      last_name:'',
      email:'',
      username:'',
      password:''
    }
    
  
  handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

  handleFormSubmit=(event) =>{
    event.preventDefault();

        var userData={
    first_name: this.state.first_name,
    last_name:this.state.last_name,
    email:this.state.email,
    username:this.state.username,
    password:this.state.password,
    }

    API.saveUser(userData)
    .then(res => {
      console.log(res);
     if(res.data.code === 200){console.log("registration successfull");}
    })
    .catch(err => console.log(err))

  }
    
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
             style={{background:"orange"}}

           />
           <form>
           <TextField
             name="first_name"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange={this.handleInputChange}
             />
           <br/>
           <TextField
             name="last_name"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange={this.handleInputChange}
             />
           <br/>
           <TextField
             name="email"
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange={this.handleInputChange}
             />
           <br/>
           <TextField
             name="username"
             hintText="Provide username you like to use"
             floatingLabelText="User name"
             autoComplete="username"
             onChange={this.handleInputChange}
             />
           <br/>
           <TextField
             name="password"
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             autoComplete="current-password"
             onChange={this.handleInputChange}
             />
           <br/>

             <RaisedButton label="Submit" primary={true} style={{margin:15}} onClick={this.handleFormSubmit}/>
           </form>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Register;