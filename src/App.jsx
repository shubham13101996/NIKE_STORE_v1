import React from "react";
import { Hero, Sales } from "./components";
import { heroapi,popularsales,topratesales } from "./data/data.js";


const App = () => {
  return (
    <main className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <Sales endpoint={topratesales}/>
    </main>
  )
};

export default App;
