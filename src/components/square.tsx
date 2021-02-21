import React, { useState } from "react";
import "../css/square.css";
import Piece from "./Piece";

function Square(props: any) {
  const color: string = findColor();

  function findColor(): string {
    if (props.rowId % 2) {
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

  return (
    <div className={["square", color, props.id].join(" ")}>
      <Piece color='d' piece='k' position={props.id} />
    </div>
  );
}

export default Square;
