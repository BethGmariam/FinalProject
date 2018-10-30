import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import API from "../../utils/API";
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


class Login extends Component {

  state={
  // users:[],
  email:'',
  password:''
  }


 handleInputChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};  

handleFormSubmit = (event)=>{
   event.preventDefault();
   API.getLogin(this.state)
  //  this.validateUserFn();
   
 }

// validateUserFn(){
//     API.getUsers()
//     .then(res => {
//       // console.log(res);
//       this.setState({users:res.data})
//         const userName = this.state.username;
//         const userPassword = this.state.password;
//         var flag = 0;// to check if user exists already in the db

//        if(!userName || !userPassword)
//        {
//          alert("both username and password are required");
//          return;
//        }
//        const userData = this.state.users;
//         for(let i=0;i<userData.length;i++)
//        {
//          if(userName===userData[i].username){
//          alert("username exists in the db")
//          flag = 1;
//            }
//           if(userPassword===userData[i].password){
//          alert("password matches")
//          flag = 1;
//            }
//            if((userName===userData[i].username) && (userPassword === userData[i].password)){
//             alert("logged in successful")
//             flag = 1;
//               }
//          }
//          if(flag === 0) {alert("please use a valid username")}

//     }).catch(err => console.log(err))
//     }

// handleFormSubmit = (event)=>{
//    event.preventDefault();
//    this.validateUserFn();
   
//  }

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