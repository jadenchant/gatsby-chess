import React, { useState } from "react";
import "../css/square.css";
import Piece from "./Piece";

function Square(props: any) {
  const color: string = findColor();
  const [piece, setPiece] = useState(init());

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

  function init() {
    let piece: string;

    // Light or Dark Piece
    if (props.rowID === 1 || props.rowID === 2) {
      piece += "l";
    } else if (props.rowID === 7 || props.rowID === 8) {
      piece += "d";
    } else {
      piece += " ";
    }

    if (props.rowID === 1) {
      if (props.id === 1 || props.id === 8) {
        return "lr";
      } else {
        return "  ";
      }
    } else {
      return "  ";
    }
  }

  return (
    <div className={["square", color, props.id].join(" ")}>
      <Piece color={piece[0]} piece={piece[1]} position={props.id} />
    </div>
  );
}

export default Square;
