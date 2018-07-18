import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textAreaInput: "",
      isValid: true,
    };
  }

  isValidPoem = poem => {
    const poemLines = poem.split("\n").map(line => line.trim());
    const isRightAmountOfLines = poemLines.length === 3;
    const reqNumOfWords = poemLines[0].split(" ").length === 5 &&
          poemLines[1].split(" ").length === 3 &&
          poemLines[2].split(" ").length === 5
    return isRightAmountOfLines && reqNumOfWords
  }

  handleTextArea = (e) => {
    this.setState({
      textAreaInput: e.target.value,
      isValid: this.isValidPoem(e.target.value)
    })
  }

  renderError = () => {
    return (
      <div id="poem-validation-error" style={{ color: "red" }}>
        This poem is not written in the right structure!
      </div>
    )
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60"
          value={this.state.textAreaInput}
          onChange={this.handleTextArea}
        />

        {!this.state.isValid ? this.renderError() : null}

      </div>
    );
  }
}

export default PoemWriter;
