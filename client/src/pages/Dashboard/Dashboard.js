// import React from "react";
import React, { Component } from 'react';
import "./Dashboard.css"
import API from "../../utils/API";
//import DeleteBtn from "../../components/Form/DeleteBtn";
import FormBtn from "../../components/Form/FormBtn";
import { Col, Row, Container } from "../../components/Grid";
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

 const displayCheck = ({ matchUser, results}) => {
   if (matchUser.Safety === 0) {
    return <p> X </p>
   }
   
  return (
      <p>✓</p>
  )
  
 };
            
              
    
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
                        <p>Is saftey a concern for them?{user.Safety}</p>
                        <p>does Quality matter to them?{user.Quality}</p>
                        <p>Are they worried about style? {user.stylish}</p>
                        <p>They need something comfortable?{user.comfort}</p>
                        <p>Are Brand Names important to them? {user.brandName}</p>
                        <p>Do they like useful things? {user.useful}</p>
                        <p>Are they a family person? {user.family}</p>
                        <p>Are they spontaneous, willing to do things on a whim?{user.spontaneous}</p>
                        <p>Are they a Gym Rat? {user.gym}</p>
                        <p>Do they like the outdoors? {user.outdoors}</p>
                        <p>Are They are a socially conscious person? {user.socialCon}</p>
                        
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
        <p> Instructions: Once gift has been selected, please share tracking number </p>
      </Container> 
  </div>


);
    }
  }
export default Dashboard;