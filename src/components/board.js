import React from 'react';
import Square from './square.js'

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)}/>
    );
  }

  boardRow(row) {
    return(
      <div className="board-row">
        {this.renderSquare(row[0])}
        {this.renderSquare(row[1])}
        {this.renderSquare(row[2])}
      </div>
    );
  }
  
  render() {
    let rows = [];
    for (let i = 0; i < 9; i++) {
      if(i % 3 === 0) {
        rows.push([i])
      }else {
        rows[rows.length -1].push(i)
      }
    }

    return (
      <div>
        {this.boardRow(rows[0])}
        {this.boardRow(rows[1])}
        {this.boardRow(rows[2])}
      </div>
    );
  }
}