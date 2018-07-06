import * as React from "react";

import "./PosterContainer.css";



const Poster = (props: {data: IPosterData}) => (
  <div className="poster">
    <a href={props.data.url}>
      <div className="poster_logo">
        <img src={`${process.env.PUBLIC_URL}/images/${props.data.filename}`} />
      </div>
      <div className="poster_title">
          {props.data.title}
      </div>
    </a>
  </div>
);

const PosterContainer = (props: {data: IPosterData[]}) => (
  <div id="poster_container">
    {props.data.map( (x, i) => <Poster data={x} key={`data${i}`} />)}
  </div>
);



export default PosterContainer;