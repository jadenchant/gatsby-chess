import React, { useState } from "react";
import "../../css/piece.css";

function Piece(props: any) {
  const color: "l" | "d" = props.color;
  const piece: "k" | "q" | "n" | "b" | "r" | "p" = props.piece;
  const svg: string = "/piece/Chess_" + piece + color + "t45.svg";
  const [position, setPosition] = useState(props.position);
}

export default Piece;
