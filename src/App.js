import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sq from './Square.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      flag: true,
      winner: 0
    }
  }
  checkWin() {
    const probs = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < probs.length; i++) {
      const [a, b, c] = probs[i];
      if (this.state.squares[a] && this.state.squares[a] === this.state.squares[b] && this.state.squares[a] === this.state.squares[c]) {
        this.setState({
          winner: this.state.squares[a]
        })
        break;
      }
    }
  }

  async handelClick(i) {
    if(!this.state.squares[i]){
      let test = this.state.squares.slice()
      test[i] = this.state.flag ? 'X' : 'O'
      let ff = !this.state.flag
      await this.setState({
        squares: test,
        flag: ff
      })
      this.checkWin()
    }
    
  }
  render() {
    
    if (this.state.winner == 0) {
      return (
        <div >
          <h1 style={{ textAlign: 'center' }}>TIK TAC TOE</h1>
          <div style={{ display: 'flex', width: '150px', flexWrap: 'wrap', margin: 'auto' }}>
            {this.state.squares.map((val, key) => {
              return <Sq value={val} onClick={() => this.handelClick(key)} />
            })}
          </div>
          <h2 style={{ textAlign: 'center' }}>Player : {this.state.flag ? 'X' : 'O'}</h2>
        </div>
      )
    }
    return (
      <div><h1 style={{ textAlign: 'center', marginTop: '20%' }}>Player {this.state.winner} Wins</h1></div>
    )
  }
}

export default App;
