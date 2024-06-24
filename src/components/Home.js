import React from "react";
import { username } from "../data/user";
import { city } from "../data/user";

function Home() {
  return (
    <div>
      <h1>{username}</h1>
      <p>City: {city}</p>
    </div>
  );
}

export default Home;
