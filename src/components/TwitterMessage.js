import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      remainingChars: this.props.maxChars
    };
  }

  handleTextChange = (event) => {
    this.setState({
      inputValue: event.target.value
    }, ()=>{
      this.setState({
        remainingChars: this.state.remainingChars - this.state.inputValue.length
      })
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
      <input type="text" value={this.state.inputValue} onChange={this.handleTextChange} />
    <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
