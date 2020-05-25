import React from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import List from "./components/List";

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
};

function App() {
  return (
    <div className="App">
      <ChoiceCard title="You" winner={true} imgURL={choices.rock} />
      <ChoiceCard title="Computer" winner={false} imgURL={choices.scissors} />
    </div>
  );
}

export default App;
