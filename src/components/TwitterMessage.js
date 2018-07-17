import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    }, function(){

    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <p>Remaining characters: {this.props.maxChars - this.state.text.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
