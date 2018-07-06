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
];



ReactDOM.render(
  <PosterContainer data={testData} />,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
