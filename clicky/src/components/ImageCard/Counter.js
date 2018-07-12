import React from "react";
import ImageCard from "./ImageCard.js";
// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    console.log("score", this.state.count)
  };

  // handleGameOver reset the game
  handleGameOver = () => {
    // We always use the setState method to update a component's state
    this.setState({ count:'' });
  };
  render() {
    console.log(this.props)
    return (
      <div>
      <ImageCard image="{props.image}" onClick={this.handleIncrement} />
      </div>
    );
  }
}

export default Counter;
