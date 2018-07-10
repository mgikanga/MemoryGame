import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Narbar/Navbar";
import ImageCard from "./components/ImageCard/ImageCard"
import options from "./options.json";
// import { options } from "sw-toolbox";

const App = () => (
    <Wrapper>
    <Navbar />
   { options.map(option => (
        <ImageCard 
        image = {option.image}
        />
    ))
}
  </Wrapper>
)
export default App;