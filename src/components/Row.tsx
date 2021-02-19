import React, { useState } from "react";
import Square from "./Square";
import "../css/row.css";

function Row(props: any) {
  const [row, setRow] = useState(makeRow);

  function makeRow() {
    let squares: number[] = [];
    const startingIndex: number = (props.id - 1) * 8 + 1;

    for (let i: number = startingIndex; i < startingIndex + 8; ++i) {
      squares.push(i);
    }

    const row: any = squares.map(square => (
      <Square key={square.toString()} id={square.toString()} />
    ));
  }

  return <div className={props.id.toString()}></div>;
}

export default Row;
