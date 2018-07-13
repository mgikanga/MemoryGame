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
        // hasBeenClicked: false,
        photos: options,
        clicked:[],
        score: 0,
        points:0,
    };
    // shuffle the images

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
      }

//    options = options;

   shuffle(arra1) {
        let ctr = arra1.length;
        let temp;
        let index;
    
        // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    

handleIncrement(id) {
    console.log(id)
    let shuffled = this.shuffle(this.state.photos)
    
    //if an image hasn't been clicked
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({
        //shuffle the image array
        photos: shuffled,
        //merge the previously empty clicked array with the newly populated clicked array
        clicked: [...this.state.clicked, id],
        //change the score
        score: this.state.score + 1
      })
    //if an image has been clicked
   
    } else {
      this.setState({
        photos: shuffled,
        clicked: [],
        score: 0,
        points: this.state.score
      })
    }
    console.log("Clicked");
  }
  componentDidMount() {
    
  }


    render() {
        console.log(this.props)
        return (
            <Wrapper>
                 <h1>Your tokens: {this.state.score} <br/> Top tokens:{this.state.points}</h1>

                <Navbar 
   
                />
                {/* <Counter /> */}

                {this.state.photos.map(option => (
                    <ImageCard
                        image={option.image}
                        key={option.id}
                        onClick={this.handleIncrement}
                        id = {option.id}
            
                    />
                ))
                }
              
            </Wrapper>
        );
    }
}
export default App;