import React, { Component } from 'react';
import { Form, Text, Scope, TextArea, Option, Select } from 'informed';

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

    constructor (){
        super ();

        this.state={
            value: '',
          displayValue: ''
        }

    }

    handleInputChange = (evt) => {
        this.setState({
            value: evt.target.value
        });
    }

    handleClick = () => {
        this.setState({
            displayValue: this.state.value, 
            value: ''
        });
    }
    
    render() {
        console.log('render', this.state);
        return (

            <div>

<h3>REGISTRATION FORM</h3>
  <h4>Please enter your personal details below:</h4>  
  <Form id="complex-validate-form">
  <Scope scope="personal details">
      <div>
            <label htmlFor="first-name">First name:</label>
            <Text field="first-name" id="first-name" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange}/>
      </div>
      <div>
            <label htmlFor="last-name">Last name:</label>
            <Text field="last-name" id="last-name" validate={basicValidation}value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="phone">Phone Number:</label>
            <Text field="phone" id="phone" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
      </div>
      <div>
            <label htmlFor="emailAddress">Email Address:</label>
            <Text field="emailAddress" id="emailAddress" validate={basicValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
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
  </Scope>

<h3>Tell us about yourself! The next section is to help your match figure out what to get you!</h3>

  <div><h4>Please tell us 5 of your favourite things:</h4>
    <div>  
      <label htmlFor="favthing-0">Favourite thing 1:</label>
      <Text field="favthing[0]" id="favthing-0" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="favthing-1">Favourite thing 2:</label>
      <Text field="favthing[1]" id="favthing-1" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="favthing-2">Favourite thing 3:</label>
      <Text field="friends[2]" id="favthing-2" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="favthing-3">Favourite thing 4:</label>
      <Text field="friends[3]" id="favthing-3" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="favthing-4">Favourite thing 5:</label>
      <Text field="friends[4]" id="favthing-4" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
  </div>


  <div><h4>Please tell us 5 of your interests or hobbies:</h4>
    <div>  
      <label htmlFor="interest-0">Interest/Hobby 1:</label>
      <Text field="interest[0]" id="interest-0" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="interest-1">Interest/Hobby 2:</label>
      <Text field="interest[1]" id="interest-1" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="interest-2">Interest/Hobby 3:</label>
      <Text field="interest[2]" id="interest-2" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="interest-3">Interest/Hobby 4:</label>
      <Text field="interest[3]" id="interest-3" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
    <div>
      <label htmlFor="interest-4">Interest/Hobby 5:</label>
      <Text field="interest[4]" id="interest-4" validate={favthingValidation} value={this.state.value} v="true" onChange={this.handleInputChange} />
    </div>
  </div>

<div>
   <label htmlFor="personality"> <h4>Please type at least 100 words and tell us about yourself, this information will be used to generate a personality profile for your match:</h4></label>
  <TextArea field="personality" id="personality" value={this.state.value} v="true" onChange={this.handleInputChange} />
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

