import * as React from "react";
import "./PosterContainer.css";



const Poster = (props: {data: IPosterData}) => (
  <div className="poster_wrapper">
    <a href={props.data.url}>
      <div className="poster" style={ { backgroundImage: `${props.data.filename}` } }>
        <p>
          {props.data.title}
        </p>
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