import * as React from "react";
import * as ReactDOM from "react-dom";
import PosterContainer from "./PosterContainer";

const testData: IPosterData[] = [
  {
    filename: "firesaurus_rex.png",
    title: "Firesaurus Rex",
    url: "http://jfaw-love.itch.io/firesaurus_rex",
  }
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PosterContainer data={testData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
