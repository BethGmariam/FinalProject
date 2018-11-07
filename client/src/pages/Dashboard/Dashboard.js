// import React from "react";
import React, { Component } from 'react';
import "./Dashboard.css"
import API from "../../utils/API";
// import DeleteBtn from "../../components/Form/DeleteBtn";
// import FormBtn from "../../components/Form/FormBtn";
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
console.log(budget);

       this.setState({
           displayValue:this.state.value, 
           value: '',            
       });


    API.getUsers()
          .then(res => {
            this.setState({ users: res.data })
            console.log(res.data)
            let someFilterFunction = function(userData){
                if (parseInt(userData.amountToSpend) === budget){
                  console.log("success")
                  console.log(userData);
                  console.log(userData.amountToSpend);
                  return userData.amountToSpend;
                } else {
                  return null;
                }        
              }
    
            const matchUser=this.state.users.filter(someFilterFunction);
            console.log(matchUser);
    
            this.setState({ users: matchUser });
    
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
          </div>
        <button type="submit" onClick={this.handleClick}>
        Submit
      </button>
    </Form>
     
    <h2 id="receiverProfileHeader"> {"Receiver's Profile"} </h2>

      {/* <Container fluid>
        <Row> */}
        {/* <Col size="md-4">
           {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                  <div className = "interest-output"> 
                      <p>First_name: {user.first_name}</p>
                      <p>Last_name: {user.last_name}</p>
                      <p>MailingAddress: {user.address}</p>
                      <p>Hobby: {user.interesthobby}</p>
                      <p>AmountToSpend:{user.amountToSpend}</p>
                      <FormBtn onClick={()=>this.deleteUser(user._id)}>Send Gift</FormBtn>
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> */}

          <div className = "container">
          {/* <Col size="md-8 sm-12" className = "container"> */}
          {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <div className = "personality-output"> 
                        <p>First_name: {user.first_name}</p>
                        <p>Last_name: {user.last_name}</p>
                        <p>MailingAddress: {user.address}</p>
                        <p>Hobby: {user.interesthobby}</p>
                        <p>AmountToSpend:{user.amountToSpend}</p>
                        <p>Agreeableness: {user.Abreeableness}</p>
                        <p>Conscientiousness: {user.Conscientiousness}</p>
                        <p>EmotionalRange: {user.EmotionalRange}</p>
                        <p>Extraversion:{user.Extraversion} </p>
                        <p>Openness: {user.Openness}</p>
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
                          For ease on operations, after package has been sent - please send us your tracking number to us via <a href="mailto:santasgiftexchange@santa.com"> email! </a>
                          </p>
                          <p>
                          <strong> Step # 4 </strong> <span role="img" aria-label="confirmation"> 💌 </span> <br />
                          Wait for our confirmation via email, please make sure you have provided the correct information in your profile.
                          </p>
                        </Modal.Content>
                      </Modal>
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
  </div>


);
    }
  }
export default Dashboard;