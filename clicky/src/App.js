import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Narbar/Navbar";
import ImageCard from "./components/ImageCard/ImageCard";
import options from "./options.json";
// import Counter from "./components/ImageCard/Counter";
// By extending the React.Component class, Counter inherits functionality from it
class App extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      count: 0
    };
    // shuffle the images
     shuffled = options.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    // handleIncrement increases this.state.count by 1
    handleIncrement = () => {
      // We always use the setState method to update a component's state
      if (this.state.count<=2){
      this.setState({ count: this.state.count + 1 });
      console.log("score", this.state.count)
      }
      else if(this.state.count>2)
      console.log("you should end the game")
    };
  
    // handleGameOver reset the game
    handleGameOver = () => {
      // We always use the setState method to update a component's state
      this.setState({ count:'' });
    };
    render() {
      console.log(this.props)
      return (
        <Wrapper>
    <Navbar />
    {/* <Counter /> */}

   { this.shuffled.map(option => (
        <ImageCard 
        image = {option.image}
        id = {option.id}
        onClick={this.handleIncrement} 
        />
    ))
}
  </Wrapper>
      );
    }
  }
export default App;