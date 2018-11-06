import React, { Component } from 'react';
import { Form, Text, Scope, TextArea, Option, Select } from 'informed';
import API from "../../utils/API";// for API end points see utils folder

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
    personality:''
  }

    constructor (){
        super ();

    this.handleClick = this.handleClick.bind(this);

    this.setFormApi = this.setFormApi.bind(this);

        this.state={
            value: '',
          displayValue: ''
        }

    }

    handleInputChange = (event) => {
      const { name, value } = event.target;
     this.setState({
       [name]: value
     });
    }

    handleClick = (event) => {
      event.preventDefault();

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
        personality:this.state.personality
      }


      API.registerFn(this.state)
      .then(res => {
        console.log(res);
      });

        this.setState({
            displayValue: this.state.value,
            value: '',


        });
        console.log(this.formApi.getState());
        console.log(userData);
    }

    setFormApi(formApi) {
      this.formApi = formApi;
    }




    render() {
        //console.log('render', this.state.name);
        return (

      <div style={{margin:80,textAlign:"center"}}>
      <h3>REGISTRATION FORM</h3>
      <h4>Please enter your personal details below:</h4>
      <Form getApi={this.setFormApi} >


      <div>
            <label htmlFor="first_name">First name:</label>
            <Text field="first_name" name="first_name" id="first_name" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />

      </div>
      <div>
            <label htmlFor="last_name">Last name:</label>
            <Text field="last_name" name="last_name" id="last_name" validate={basicValidation}value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="phone">Phone Number:</label>
            <Text field="phone" id="phone" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="email">Email Address:</label>
            <Text field="email" id="email" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="password"> Password:</label>
            <Text field="password" id="password" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="twitterAccount">Twitter Account:</label>
            <Text field="twitterAccount" id="twitterAccount" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="address">Home Mailing Address:</label>
            <Text field="address" id="address" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="postalcode">Postal Code:</label>
            <Text field="postalcode" id="postalcode" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
        <label htmlFor="select-province">Province:</label>
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


<h3>Tell us about yourself! The next section is to help your match figure out what to get you!</h3>

  <div>
    <h4>Please tell us 5 of your favourite things in the text box below, separate them with a ',':</h4>
    <TextArea field="favthings" id="favthings" value={this.state.value} v="true" onChange={this.handleInputChange} />
  </div>


  <div>
    <h4>Please tell us 5 of your interests or hobbies in the text box below, separate them with a ',':</h4>
    <TextArea field="interesthobby" id="interesthobby" value={this.state.value} v="true" onChange={this.handleInputChange} validate={favthingValidation} />
  </div>

<div>
   <label htmlFor="personality"> <h4>Please type at least 100 words and tell us about yourself, this information will be used to generate a personality profile for your match:</h4></label>
  <TextArea field="personality" id="personality" value={this.state.value} v="true" onChange={this.handleInputChange} validate={favthingValidation} />
</div>

<div>
  <button type="submit" onClick={this.handleClick}>
    Submit
  </button>
  </div>
  <div><p></p></div>


</Form>
</div>

        );
    }
}

export default RegisForm;
