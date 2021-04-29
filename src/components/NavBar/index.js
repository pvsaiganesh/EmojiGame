// Write your code here.
import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  render() {
    const {score, topScore} = this.props
    return (
      <div className="row">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
        />
        <h1>Emoji Game</h1>
        <p>Score:{score}</p>
        <p>Top Score:{topScore}</p>
      </div>
    )
  }
}
export default Navbar
