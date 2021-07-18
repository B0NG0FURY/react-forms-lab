import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  updateState = event => {
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.updateState(event)} type="text" name="message" id="message" value={this.state.message} maxLength={this.props.maxChars}/>
        <p>Characters remaining: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
