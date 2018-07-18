import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    console.log(event.target.rows);
    this.setState({
      value: event.target.value
    })
  }

  render() {
   const splitArr = this.state.value.split('\n')
   if ((splitArr.length === 3) && (splitArr[0].split(' ').length === 5) && (splitArr[1].split(' ').length === 3) && splitArr[2].split(' ').length === 5){
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.value}/>
      </div>
    );} else {
      return (
        <div>
          <textarea rows="3" cols="60" onChange={this.handleChange} value={this.state.value}/>
            <div id="poem-validation-error" style={{ color: "red" }}>
              This poem is not written in the right structure!
            </div>
        </div>
      )
    }
  }
}

export default PoemWriter;
