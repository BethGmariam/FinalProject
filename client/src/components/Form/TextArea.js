import React from "react";

export const TextArea = props => (
  <div className="prstxtarea">
      <label htmlFor="personality"> <h4>Please type at least 100 words and tell us about yourself, this information will be used to generate a personality profile for your match:</h4></label>
  <textArea field="personality" id="personality" value={this.state.value} v="true" onChange={this.handleInputChange} />
  </div>
);
