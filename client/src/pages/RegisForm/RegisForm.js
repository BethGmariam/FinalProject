import React, { Component } from 'react';
import { Form, Text, TextArea, Option, Select } from 'informed';
import { Button } from 'semantic-ui-react';
import './RegisForm.css';
import API from "../../utils/API";// to connect form to db

  const basicValidation = value => {
    return !value || value.length < 2 ? 'Field must be longer than two characters' : null;
  }
  
  const duplicateValidation = ( value, values ) => {
    return values.filter( v => v === value ).length > 1 ? 'This field must be unique.' : null;
  }
  
  const favthingValidation = ( value, values ) => {
    return basicValidation(value) || duplicateValidation( value, values.favthing )
  }


class RegisForm extends Component {

  state = {
    first_name:'',
    last_name:'',
    phone:'',
    email:'',
    password:'',
    twitterAccount:'',
    address:'',
    postalcode:'',
    province: '',
    favthings: '',
    interesthobby: '',
    personality:'',
    amountToSpend:0
  }

    constructor (){
        super ();

        this.handleClick = this.handleClick.bind(this);

    // this.setFormApi = this.setFormApi.bind(this);

        this.state={
            value: '',
          displayValue: ''
        }

    }



    handleInputChange = (evt) => {
      const { name, value } = evt.target;
     this.setState({
       [name]: value
     });
    }

    handlePhoneValid = () => {
      let validPhone = {
        phone:this.state.phone
      }
      //console.log(validPhone.phone);
      API.verifyNum(validPhone.phone)
         .then(res => {
          //console.log(res.data);
          let validatephone= res.data.valid
          //console.log(validatephone)
          var bt = document.getElementById('submit-btn');
          if (validatephone === false) {
            alert('Hey... you and I both know thats not a real phone number, try again');
            bt.disabled = true;
          }
          else if  (validatephone === undefined) {
            bt.disabled = false
          } else {
              bt.disabled = false;
          }
    })
}

    handleEmailValid = () => {
      let validEmail = {
        email:this.state.email
      }
      //console.log(validEmail.email)
      API.verifyEM(validEmail.email)
          .then(res => {
          //console.log(res.data);
          let validateemail = res.data.format_valid
          console.log(validateemail);
          var bt = document.getElementById('submit-btn');
          if (validateemail === false) {
            alert("Oh, Come on! Who are you trying to fool! Use a real email!");
            bt.disabled = true;
        } else if  (validateemail === undefined) {
          bt.disabled = false
        } else {
            bt.disabled = false;
        }
    })   
}

    handleClick = (evt) => {
      evt.preventDefault();
      this.props.history.push('/dashboard');

      let userData = {
        first_name:this.state.first_name,
        last_name:this.state.last_name,
        phone:this.state.phone,
        email:this.state.email,
        password:this.state.password,
        twitterAccount:this.state.twitterAccount,
        address:this.state.address,
        postalcode:this.state.postalcode,
        province: this.state.province,
        favthings: this.state.favthings,
        interesthobby: this.state.interesthobby,
        personality:this.state.personality,
        amountToSpend:parseInt(this.state.amountToSpend)
      }
 console.log(evt.target.value);

        this.setState({
            displayValue: this.state.value, 
            value: '',            
        });

        //console.log(this.formApi.getState());
        console.log(userData);

 //======================================================== add user data to db ==================
API.saveUser(userData).then((res)=>{
  console.log(res);

});
//======================================================== add user data to db  ==================
        
    }

    setFormApi(formApi) {
      this.formApi = formApi;
    }

    countWords = () => {
      let str1 = document.getElementById("personality").value;
      //exclude  start and end white-space
      str1 = str1.replace(/(^\s*)|(\s*$)/gi,"");
      //convert 2 or more spaces to 1  
      str1 = str1.replace(/[ ]{2,}/gi," ");
      // exclude newline with a start spacing  
      str1 = str1.replace(/\n /,"\n");
      document.getElementById("noofwords").value = str1.split(' ').length;
    }

  
    
    render() {
        //console.log('render', this.state.name);
        return (

<div id = "registration-form">
    <h3> {"Giver's Personal Information:"} </h3>
      <Form>
        <div className = "question-reg">
                <label htmlFor="first_name"> First Name: </label>
                <Text field="first_name" name="first_name" className="question-field" id="first_name"  validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
          </div>
          <div className = "question-reg">
                <label htmlFor="last_name">Last name:</label>
                <Text field="last_name" name="last_name" className="question-field" id="last_name" validate={basicValidation}value={this.state.value} v="true" onChange={this.handleInputChange} />
          </div>
          <div className = "question-reg">
                <label htmlFor="phone">Phone Number:</label>
                <Text field="phone" className="question-field" id="phone" placeholder="XXX-XXX-XXXX" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} onBlur={this.handlePhoneValid} />
          </div>
          <div className = "question-reg">
                <label htmlFor="twitterAccount">Twitter Account:</label>
                <Text field="twitterAccount" className="question-field" id="twitterAccount" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
          </div>
          <div className = "question-reg">
                <label htmlFor="email">Email Address:</label>
                <Text field="email" className="question-field" id="email" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} onBlur={this.handleEmailValid} />
          </div>
          <div className = "question-reg">
                <label htmlFor="password"> Password:</label>
                <Text field="password" className="question-field" id="password" type="password" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
          </div>

          
          <div className = "question-reg">
                <label htmlFor="address">Home Mailing Address:</label>
                <Text field="address" className="question-field" placeholder="Unit # / Street Name / City" id="address" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
          </div>
          <div className = "question-reg">
                <label htmlFor="postalcode">Postal Code:</label>
                <Text field="postalcode" className="question-field" placeholder="X1XX1X" id="postalcode" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
          </div>
          <div className = "question-reg"> 
            <label htmlFor="select-province"> Province:</label>
              <Select field="province" id="select-province" value={this.state.value} onChange={this.handleInputChange} v="true">
                  <Option value="" disabled> Select One...
                  </Option>
                      <Option value="ON">ON</Option>
                      <Option value="QC">QC</Option>
                      <Option value="NS">NS</Option>
                      <Option value="NB">NB</Option>
                      <Option value="MB">MB</Option>
                      <Option value="BC">BC</Option>
                      <Option value="PE">PE</Option>
                      <Option value="SK">SK</Option>
                      <Option value="AB">AB</Option>
                      <Option value="NL">NL</Option>
            </Select>
          </div>

          <div className = "question-reg">
                <label htmlFor="amountToSpend">Amount To Spend:</label>
                <Text field="amountToSpend" className="question-field" id="amountToSpend"  value={this.state.value} v="true" onChange={this.handleInputChange} />
          </div>
          
    

    <h3> Interests &amp; Personality: </h3>

      <div>
        <h4>Please tell us 5 of your favourite things in the text box below, separate them with a ',' </h4>
        <TextArea field="favthings" id="favthings" value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>


      <div>
        <h4>Please tell us 5 of your interests or hobbies in the text box below, separate them with a ',' </h4> 
        <TextArea field="interesthobby" id="interesthobby" value={this.state.value} v="true" onChange={this.handleInputChange} validate={favthingValidation} />
      </div>

    <div>
        <label htmlFor="personality"> <h4>In 100 words or less, please tell us about yourself. This information will be used to generate a personality profile for your match - e.g. write about your day, hobbies, goals, a memory, etc.. </h4></label>
        <TextArea field="personality" id="personality" value={this.state.value} v="true" onChange={this.handleInputChange} validate={favthingValidation} />
    </div>

    <div id = "word-count">
      <button id = "count-btn" type="button" name="Convert" value="No. of Words" onClick={this.countWords} > Click here for Word Count </button>
      
      <input id= "noofwords" type="text" size="12"  readOnly={true} defaultValue= "" />  
    </div>

      <div id = "submit-btn" >
      <Button positive type="submit" onClick={this.handleClick}>Submit</Button>
      </div>
      <div><p></p></div>

    </Form>
</div>

);
}
}

export default RegisForm;
