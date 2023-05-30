import "./App.css";
import React from "react";
import Cards from "./components/Cards";
function App() {
  return (
    <div>
      <Cards
        title={"Card title"}
        text={
          " Some quick example text to build on the card title and make up the\n" +
          "          bulk of the card's content."
        }
      >
        <img
          alt={""}
          src={"https://ic.wampi.ru/2021/11/18/leo.md.jpg"}
          className="card-img-top"
        />
      </Cards>
      <Cards
        title={"Special title treatment"}
        text={
          "With supporting text below as a natural lead-in to additional content."
        }
      />
    </div>
  );
}

export default App;