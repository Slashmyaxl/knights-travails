import { myBoard } from './chessboard.mjs';
import { adjacencies } from './edges.mjs';
import { vertexToCoords, reverseArray } from './conversions.mjs';

console.log(knightMoves([6, 6], [1, 2]))

function knightMoves(origin, dest) {
    const originVertex = myBoard[origin[0]][origin[1]];
    const destVertex = myBoard[dest[0]][dest[1]];
    const searchInfo = [];

    // Breadth-First Search to find shortest path based on 'adjacencies' graph
    for (let i = 0; i < adjacencies.length; i++) {
      searchInfo[i] = { distance: null, predecessor: null };
    }

    // Origin starts at distance of 0 and is first vertex queued
    searchInfo[originVertex].distance = 0;
    const queue = [];
    queue.push(originVertex);

    // While queue is empty and until destination has been reached, neighboring vertices that have not been visited will be applied distance of its predecessor + 1
    while(queue[0] >= 0 && queue[0] !== destVertex) {
      let u = queue.shift();

      for (let i = 0; i < adjacencies[u].length; i++) {
        let v = adjacencies[u][i];
        if (searchInfo[v].distance === null) {
          searchInfo[v].distance = searchInfo[u].distance + 1;
          searchInfo[v].predecessor = u;
          queue.push(v);
        }
      }
    }
  
    // New array for pathway and conversion of vertices to their respective coordinates on chess board
    let newArray = [];
    const moves = searchInfo[destVertex].distance;
    let last = destVertex;

    for (let i = 0; i <= moves; i++) {
      newArray.push(vertexToCoords(last));
      last = searchInfo[last].predecessor
    }

    newArray = reverseArray(newArray);

    return 'You made it in ' + moves + ' moves! Your path was: ' + newArray.join(' -> ')
  }
