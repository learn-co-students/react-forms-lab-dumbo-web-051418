import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textarea: ''
    };
  }

  textareaChangeHandler = (e) => {
    // e.target.value.split('\n').map((line) => (line.split(' ').length))
    this.setState({textarea: e.target.value})
  }

  validate = () => {
    const fakeHaikuCount = [5, 3, 5]
    // console.log(this.state.textarea.split('\n').forEach())
    let actualCount = this.state.textarea.split('\n').map((line) => (line.trim().split(' ').length))

    let accumulator = true
    for ( let i = 0; i < fakeHaikuCount.length; i++ ) {
      accumulator = accumulator && (actualCount[i] === fakeHaikuCount[i])
    }

    return accumulator
  }

  render() {
    if (this.validate()) {
      return (
        <div>
        <textarea rows="3" cols="60" value={this.state.textarea} onChange={this.textareaChangeHandler}/>
        </div>
      );
    } else {
      return (<div>
      <textarea rows="3" cols="60" value={this.state.textarea} onChange={this.textareaChangeHandler}/>
      <div id="poem-validation-error" style={{ color: "red" }}>
      This poem is not written in the right structure!
      </div>
      </div>)
    }

  }
}

export default PoemWriter;
