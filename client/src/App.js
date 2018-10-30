import React, { Component } from 'react';
import Registration from './pages/Registration/Registration';
import './App.css';
import Loginscreen from './pages/users/Loginscreen'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
// injectTapEventPlugin();

class App extends Component {
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
      <div className="App">
        <Registration />
      </div>
    );
  }
}
// const style = {
//   margin: 15,
// };
export default App;