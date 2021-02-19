import React, { useState } from "react";
import Row from "./Row";
import Square from "./Square";
import "../css/board.css";

function Board(props: string) {
  const size: number = 64;

  const [board, setBoard] = useState(makeBoard);

  function makeBoard() {
    let ids: number[] = [];
    let rows: number[] = [];

    for (let i: number = 1; i <= 64; ++i) {
      ids.push(i);
    }

    for (let i: number = 8; i > 0; --i) {
      rows.push(i);
    }

    const board: any = rows.map(row => <Row key={row.toString()} id={row} />);

    console.log(board);
    return board;
  }

  return (
    <main className='board'>
      {board}
      <div className='row8'></div>
      <div className='row7'></div>
      <div className='row6'></div>
      <div className='row5'></div>
      <div className='row4'></div>
      <div className='row3'></div>
      <div className='row2'></div>
      <div className='row1'></div>
    </main>
  );
}

export default Board;
