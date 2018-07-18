import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charLeft: this.props.maxChars
    };
  }

  textChangeHandler = (e) => {
    this.setState({value: e.target.value}, this.updateCharCount)
  }

  updateCharCount = () => {
    return this.setState({charLeft: this.props.maxChars - this.state.value.length})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.textChangeHandler}/><br/>
        {this.state.charLeft} characters remain
      </div>
    );
  }
}

export default TwitterMessage;
