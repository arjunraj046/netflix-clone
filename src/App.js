
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import Rowpost from "./components/rowPost/Rowpost";
import { Orginals, horror,action,comedy } from "./urls";
import React from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost title="Netflix Orginals" url={Orginals} />
      <Rowpost title="Horror" isSmall url={horror} />
      <Rowpost title="Action" isSmall url={action} />
      <Rowpost title="Comedy" isSmall url={comedy} />

    </div>
  );
}

export default App;
