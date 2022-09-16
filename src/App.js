import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { States } from "./components/States";
import { Container } from "react-bootstrap";

function App() {
  const states = [
    { name: "Kerala", language: "Malyalam", population: 10000 },
    { name: "Uttarakhand", language: "Hindi", population: 50000 },
    { name: "Himachal Pradesh", language: "Hindi", population: 710000 },
  ];
  return (
    <div className="App">
      <Container>
        <States states={states} />
      </Container>
    </div>
  );
}

export default App;
