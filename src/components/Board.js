import React from 'react';

function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); // slice returns a copy of original squares array
        squares[i] = this.state.xIsNext ? 'X' : 'O'; // change the state of [i](clicked square) X or O dependant on bool flag status
        this.setState({
            squares: squares, // write state to board.squares
            xIsNext: !this.state.xIsNext, // flips the flag
        }); 
        
    }

    renderSquare(i) {
        return (
            <Square 
                value={this.state.squares[i]} 
                onClick = { ()=>this.handleClick(i)  }
            />
        );
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>
            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>
            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

  export default Board;