import React, { useState } from "react";
import "../css/square.css";

function Square(props: any) {
  const color: string = findColor();

  function findColor(): string {
    console.log(props.id);
    if (props.id % 2) {
      return "white";
    } else {
      return "black";
    }
  }

  return <div className={color}></div>;
}

export default Square;
