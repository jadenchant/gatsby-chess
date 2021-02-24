import React, { useState } from "react";
import "../css/piece.css";

function Piece(props: any) {
  const color: "l" | "d" | " " = props.color;
  const piece: "k" | "q" | "n" | "b" | "r" | "p" | " " = props.piece;
  const svg: string =
    "/pieces/" + findSVG() + "/Chess_" + piece + color + "t45.svg";
  const [position, setPosition] = useState(props.position);

  // Finds the svg location
  function findSVG() {
    if (color === "l") {
      return "white";
    } else {
      return "black";
    }
  }

  // Checks if the space has a piece or not
  function checkSpace() {
    if (color === " ") {
      return <div className='nopiece'></div>;
    } else {
      return (
        <img
          src={svg}
          alt={[color, piece, position].join(" ")}
          className='piece'
          draggable='false'
        ></img>
      );
    }
  }

  return <div className='piece'>{checkSpace()}</div>;
}

export default Piece;
