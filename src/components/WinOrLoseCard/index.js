// Write your code here.
import {Component} from 'react'

import './index.css'

class WinOrLose extends Component {
  render() {
    const {answer, restartGame, score} = this.props
    return (
      <div className="result">
        {answer ? (
          <div className="res-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="img"
            />
            <div>
              <h1>You Won</h1>
              <p>Best Score</p>
              <p>{score}/12</p>
              <button type="button" onClick={restartGame}>
                Play Again
              </button>
            </div>
          </div>
        ) : (
          <div className="res-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="img-2"
            />
            <div>
              <h1>You Lose</h1>
              <p>Score</p>
              <p> {score}/12 </p>
              <button type="button" onClick={restartGame}>
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default WinOrLose
