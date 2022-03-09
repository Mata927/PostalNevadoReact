import { useState, useEffect } from "react";
import Floc from "./floc";
import "./postal.css";

function nouFloc() {
  return { x: 100 * Math.random(), y: -10 };
}

function crearFlocs() {
  return [
    nouFloc(),
    nouFloc(),
    nouFloc(),   
    nouFloc(), 
    nouFloc(), 
    nouFloc(), 
    nouFloc(), 
    nouFloc(),
    nouFloc(), 
    nouFloc(), 
    nouFloc(), 
    nouFloc(), 
    nouFloc(),
    nouFloc(), 
    nouFloc(), 
    nouFloc(), 
    nouFloc(), 
    nouFloc(),
    nouFloc(),
    nouFloc(),
    nouFloc(),

  ];
}

export default function Nevada() {
  let [flocs, setFlocs] = useState(crearFlocs());

  useEffect(() => {
    setInterval(() => {
      setFlocs((tots) => moureFlocs(tots));
    }, 65);
  }, []);

  function moureFlocs(flocs) {
    return flocs.map((floc) => moureFloc(floc));
  }

  function moureFloc({ x, y }) {
    if(y >=100){
      y = -10
    }
    return { x: x+random(-1,1), y: y + 4 * Math.random() };
  }
  function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

  return (
    
    <body>
      {flocs.map((n, i) => (
        <Floc key={i} x={n.x} y={n.y} />
      ))}
    </body>
    
  );
}
