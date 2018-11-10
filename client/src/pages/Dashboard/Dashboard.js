import React, { Component } from 'react';
import "./Dashboard.css"
import API from "../../utils/API";
import { Button, Header, Modal } from 'semantic-ui-react'
import { List, ListItem } from "../../components/List";
import { Form, Text } from 'informed';
class Dashboard extends Component {

  state = {
    users: [],
    amountToSpend:0
  };

  constructor (){
    super ();
    this.handleClick = this.handleClick.bind(this);

// this.setFormApi = this.setFormApi.bind(this);

    // this.state={
    //     value: '',
    //   displayValue: ''
    // }

}


  //  componentDidMount() {
  //    this.loadUsers();
  //  }

 

 
  handleInputChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  };

  handleClick = (evt) => {
    evt.preventDefault();

    let budget = parseInt(this.state.amountToSpend)
    
//console.log(evt.target.value);
//console.log(budget);

       this.setState({
           displayValue:this.state.value, 
           value: '',            
       });


    API.getUsers()
          .then(res => {
            this.setState({ users: res.data })
            //console.log(res.data)
            let someFilterFunction = function(userData){
                if (parseInt(userData.amountToSpend) === budget){
                  //console.log("success")
                  // console.log(userData);
                  // console.log(userData.amountToSpend);
                  return userData.amountToSpend;
                } else {
                  return null;
                }        
              }
    
            const matchUser=this.state.users.filter(someFilterFunction);
           // console.log(matchUser);
    
            this.setState({ users: matchUser });

            console.log(matchUser)

//  const displayCheck = ({ matchUser }) => {
//    if (matchUser.Safety === 0) {
//      console.log("not")
//      document.append
//    } else { 
//      console.log("yes")
//    }
  
//  };

//  console.log(displayCheck)
  
        })
          .catch(err => console.log(err));
  }

  deleteUser = (id) => {
    API.deleteUser(id)
       .then(res => this.loadUsers())
       .catch(err => console.log(err));
  };

  render() {
    return (
  <div className = "dashboard">
    <h1>Dashboard</h1>
    <Form id="amount-to-spend">
    <div className = "question">
                <label htmlFor="amountToSpend">Amount To Spend:</label>
                <Text field="amountToSpend" className="question-field" id="amountToSpend"  value={this.state.value} v="true" onChange={this.handleInputChange} />
                <button type="submit" onClick={this.handleClick}> Submit </button>
          </div>

    </Form>
     
    <h2 id="receiverProfileHeader"> {"Receiver's Profile"} </h2>

          <div className = "container">
          {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <div className = "personality-output"> 
                        <p> <strong> Personal Info </strong> </p>
                        <p>First_name: {user.first_name}</p>
                        <p>Last_name: {user.last_name}</p>
                        <p>MailingAddress: {user.address}</p>
                        <p>Hobby: {user.interesthobby}</p>
                        <p>AmountToSpend:{user.amountToSpend}</p> <br />

                        <p> <strong> Interests and Personality </strong> </p>
                        <p>Is saftey a concern for them?{user.Safety}</p><p id="wpa1"></p>
                        <p>does Quality matter to them?{user.Quality}</p><p id="wpa2"></p>
                        <p>Are they worried about style? {user.stylish}</p><p id="wpa3"></p>
                        <p>They need something comfortable?{user.comfort}</p><p id="wpa4"></p>
                        <p>Are Brand Names important to them? {user.brandName}</p><p id="wpa5"></p>
                        <p>Do they like useful things? {user.useful}</p><p id="wpa6"></p>
                        <p>Are they a family person? {user.family}</p><p id="wpa7"></p>
                        <p>Are they spontaneous, willing to do things on a whim?{user.spontaneous}</p><p id="wpa8"></p>
                        <p>Are they a Gym Rat? {user.gym}</p><p id="wpa9"></p>
                        <p>Do they like the outdoors? {user.outdoors}</p><p id="wpa10"></p>
                        <p>Are They are a socially conscious person? {user.socialCon}</p><p id="wpa11"></p>
      
                        <Modal trigger={<Button onClick={()=>this.deleteUser(user._id)}>Send Gift</Button>} basic size='small'>
                        <Header icon='smile' content='Instructions to help Santa do his/her job:' />
                        <Modal.Content className = "modal-content">
                          <p>
                          <strong> Step # 1 </strong> <span role="img" aria-label="shopping"> 🎅 </span> <br />
                          Go shopping - please consider the receiver's profile when selecting a gift <br />
                          Some great resources would be <a href = "https://www.amazon.ca/"> Amazon </a>, <a href = "https://www.thebay.com/"> The Bay </a>, <a href = "https://www.chapters.indigo.ca/en-ca/"> Chapters </a>, <a href = "https://www.walmart.ca/en"> Walmart </a> ! 
                          </p>
                          <p>
                          <strong> Step # 2 </strong> <span role="img" aria-label="package"> 📦 </span> <br />
                          Once gift has been selected and purchased, please mail your package to our address: <br />
                          123 Magic Unicorn Avenue North Pole, North Pole 888888
                          </p>
                          <p>
                          <strong> Step # 3 </strong> <span role="img" aria-label="mail"> 📨 </span> <br />
                          For ease on operations, after package has been sent - please send your tracking number to us via <a href="mailto:santasgiftexchange@santa.com"> email! </a>
                          </p>
                          <p>
                          <strong> Step # 4 </strong> <span role="img" aria-label="confirmation"> 💌 </span> <br />
                          Wait for our confirmation via email, which you must receive within 24-48 hours. If you have not received one, please give us a shout by calling 888-143-0987!
                          </p>
                        </Modal.Content>
                      </Modal>
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h4>No Results to Display</h4>
            )}
          </div>
  </div>


);
    }
  }
export default Dashboard;