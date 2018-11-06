// import React from "react";
import React, { Component } from 'react';
import "./Dashboard.css"
import API from "../../utils/API";
// import DeleteBtn from "../../components/Form/DeleteBtn";
import FormBtn from "../../components/Form/FormBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Dashboard extends Component {

  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data })
        const matchUser=this.state.users.filter(userData => userData.amountToSpend !== 100)
        this.setState({ matchUser });

    })
      .catch(err => console.log(err));
  };

  // removeUser = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const users = this.state.users.filter(friend => friend.id !== id);
  //   // Set this.state.users equal to the new users array
  //   this.setState({ users });
  // };
 

  handleInputChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  };

  deleteUser = (id) => {
    API.deleteUser(id)
       .then(res => this.loadUsers())
       .catch(err => console.log(err));
  };



  render() {
    return (
  <div className = "dashboard">
    <h1>Dashboard</h1>
      <p> Instructions: Once gift has been selected, please share tracking number </p>
    <h2 id="receiverProfileHeader"> Receiver's Profile </h2>

      <Container fluid>
        <Row>
        <Col size="md-4">
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
          </Col>

          <Col size="md-8 sm-12">
          {this.state.users.length ? (
              <List>
                {this.state.users.map(user => (
                  <ListItem key={user._id}>
                    <div className = "personality-output"> 
                        <p>Agreeableness: {user.Abreeableness}</p>
                        <p>Conscientiousness: {user.Conscientiousness}</p>
                        <p>EmotionalRange: {user.EmotionalRange}</p>
                        <p>Extraversion:{user.Extraversion} </p>
                        <p>Openness: {user.Openness}</p>
                        <FormBtn onClick={()=>this.deleteUser(user._id)}>Send Gift</FormBtn>

                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

        </Row>
      </Container> 
  </div>
);
    }
  }
export default Dashboard;