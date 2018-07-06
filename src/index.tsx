import * as React from "react";
import * as ReactDOM from "react-dom";
import PosterContainer from "./components/PosterContainer";

import "./index.css";

import registerServiceWorker from "./registerServiceWorker";



const testData: IPosterData[] = [
  {
    filename: "firesaurus_rex.jpg",
    title: "Firesaurus Rex",
    url: "http://jfaw-love.itch.io/firesaurus_rex",
  },
  {
    filename: "dungeon_profiteer.jpg",
    title: "Dungeon Profiteer",
    url: "https://taqueso.itch.io/dungeon-profiteer",
  },
  {
    filename: "galacide.jpg",
    title: "Galacide",
    url: "http://galacide.com/",
  },
  {
    filename:"bodega_blast.jpg",
    title: "Bodega Blast",
    url: "http://www.awfuljams.com/little-awful-2017/games/bodega-blast",
  }
];



ReactDOM.render(
  <PosterContainer data={testData} />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
