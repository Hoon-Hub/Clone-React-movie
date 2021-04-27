import React from "react";

function Food({ fav }){
  
  return <h1>I like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>hello?</h1>
      <Food fav="Kimchi" />
      <Food fav="Ramen" />
      <Food fav="Sangupsal" />
      <Food fav="Jjajangmen" />

    </div>
  );
}

export default App;
