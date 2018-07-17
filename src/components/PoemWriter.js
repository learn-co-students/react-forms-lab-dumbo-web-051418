import React from "react";

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      valid: true
    };
  }

  isValidPoem = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const isRightAmountOfLines = poemLines.length === 3;
  if (poem && isRightAmountOfLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

  onChange = event => {
    let oldState = {...this.state};

    oldState.text = event.target.value;
    oldState.valid = this.isValidPoem(oldState.text);
    this.setState({
      ...oldState,
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.onChange} value={this.state.text}/>
        {!this.state.valid && (<div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>)
        }
      </div>
    );
  }
}

export default PoemWriter;
