import React from "react";
import Home from "./Home"; // Import Home component
import About from "./About"; // Import About component
import NavBar from "./NavBar"; // Import NavBar component

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
