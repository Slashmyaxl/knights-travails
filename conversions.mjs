import { myBoard } from './chessboard.mjs'

function vertexToCoords (vertex) {
    return vertex <= 7
      ? [0, myBoard[0].indexOf(vertex)]
      : vertex <= 15
      ? [1, myBoard[1].indexOf(vertex)]
      : vertex <= 23
      ? [2, myBoard[2].indexOf(vertex)]
      : vertex <= 31
      ? [3, myBoard[3].indexOf(vertex)]
      : vertex <= 39
      ? [4, myBoard[4].indexOf(vertex)]
      : vertex <= 47
      ? [5, myBoard[5].indexOf(vertex)]
      : vertex <= 55
      ? [6, myBoard[6].indexOf(vertex)]
      : [7, myBoard[7].indexOf(vertex)]
  }

  function reverseArray (arr) {
    let newArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }

  export { vertexToCoords, reverseArray }