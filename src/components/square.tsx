import React, { useState } from "react";
import "../css/square.css";
import Piece from "./Piece";

function Square(props: any) {
  const color: string = findColor();
  const [piece, setPiece] = useState(init());

  // Calculates the Square Color
  function findColor(): string {
    if (props.rowID % 2) {
      if (props.id % 2) {
        return "black";
      } else {
        return "white";
      }
    } else {
      if (props.id % 2) {
        return "white";
      } else {
        return "black";
      }
    }
  }

  // Initial Game Setup
  function init() {
    let piece: string = "";

    // Light or Dark Piece
    if (props.rowID === 1 || props.rowID === 2) {
      piece += "l";
    } else if (props.rowID === 7 || props.rowID === 8) {
      piece += "d";
    } else {
      piece += " ";
    }

    // Piece Type
    if (props.rowID === 1 || props.rowID === 8) {
      if (props.id % 8 === 1 || props.id % 8 === 0) {
        return piece + "r";
      } else if (props.id % 8 === 2 || props.id % 8 === 7) {
        return piece + "n";
      } else if (props.id % 8 === 3 || props.id % 8 === 6) {
        return piece + "b";
      } else if (props.id % 8 === 4) {
        return piece + "q";
      } else if (props.id % 8 === 5) {
        return piece + "k";
      }
    } else if (props.rowID === 2 || props.rowID === 7) {
      return piece + "p";
    } else {
      return piece + " ";
    }
  }

  function handleClick(e: any) {
    console.log(piece + props.id);
  }

  return (
    <div
      className={["square", color, props.id].join(" ")}
      onClick={handleClick}
    >
      {/* <div className='overlay'></div> */}
      <Piece color={piece[0]} piece={piece[1]} position={props.id} />
    </div>
  );
}

export default Square;
