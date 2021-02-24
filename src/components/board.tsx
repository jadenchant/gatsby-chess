import React, { useState } from "react";
import Row from "./Row";
import "../css/board.css";

function Board() {
  const [board, setBoard] = useState(makeBoard);

  // Creates the inital board
  function makeBoard() {
    let rows: number[] = [];

    for (let i: number = 8; i > 0; --i) {
      rows.push(i);
    }

    const board: any = rows.map(row => <Row key={row.toString()} id={row} />);

    // console.log(board);
    return board;
  }

  return <main className='board'>{board}</main>;
}

export default Board;
