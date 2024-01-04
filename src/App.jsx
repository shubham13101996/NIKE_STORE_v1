import React from "react";
import { FlexContent, Hero, Sales, Stories } from "./components";
import {
  heroapi,
  popularsales,
  topratesales,
  highlight,
  sneaker,
  story,
} from "./data/data.js";

const App = () => {
  return (
    <main className="flex flex-col gap-16 relative">
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExists />
      <FlexContent endpoint={highlight} ifExists />

      <Sales endpoint={topratesales} />
      <FlexContent endpoint={sneaker} />
      <Stories story={story} />
    </main>
  );
};

export default App;
