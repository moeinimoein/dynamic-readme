import { utils } from './utils';
import { Piece } from './Piece';

export class Queen extends Piece {
    type = 'Queen'

    computeLegalMoves(chessInstance, board) {
      this.legalMoves = [];
        // TODO Check discover check
        // TODO Check borders
        // TODO Check piece devant
        

        for(let x = this.x - 1; x >= 0; x--) {
          if(board[this.y][x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
          this.legalMoves.push({x: x, y: this.y})
          if(board[this.y][x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
        }
        for(let x = this.x + 1; x <= 7; x++) {
          if(board[this.y][x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
          this.legalMoves.push({x: x, y: this.y})
          if(board[this.y][x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
        }
    
        for(let y = this.y - 1; y >= 0; y--) {
          if(board[y][this.x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
          this.legalMoves.push({x: this.x, y: y})
          if(board[y][this.x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
        }
        for(let y = this.y + 1; y <= 7; y++) {
          if(board[y][this.x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
          this.legalMoves.push({x: this.x, y: y})
          if(board[y][this.x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
        }

        let caseCoords = {x: this.x, y: this.y}
    // top left
    while(--caseCoords.x >= 0 && --caseCoords.y >= 0) {
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
      this.legalMoves.push({...caseCoords})
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
    }
    
    caseCoords = {x: this.x, y: this.y}
    // bottom right
    while(++caseCoords.x <= 7 && ++caseCoords.y <= 7) {
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
      this.legalMoves.push({...caseCoords})
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
    }


    caseCoords = {x: this.x, y: this.y}
    // top right
    while(++caseCoords.x <= 7 && --caseCoords.y >= 0) {
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
      this.legalMoves.push({...caseCoords})
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
    }

    caseCoords = {x: this.x, y: this.y}
    // bottom left
    while(--caseCoords.x >= 0 && ++caseCoords.y <= 7) {
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'white' : 'black')) break;
      this.legalMoves.push({...caseCoords})
      if(board[caseCoords.y][caseCoords.x]?.color === (this.color === 'white' ? 'black' : 'white')) break;
    }

    if(chessInstance.simulationState) return
    chessInstance.simulationState = true
    this.legalMoves = utils.filterPin(this.legalMoves, {x: this.x, y: this.y}, board, chessInstance)
    chessInstance.simulationState = false
  }
}