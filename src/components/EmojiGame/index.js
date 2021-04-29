/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import Navbar from '../NavBar'
import WinOrLose from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {ids: [], score: 0, topScore: 0, gameOver: false, result: false}

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)
    const {ids, score, topScore, gameOver, result} = this.state
    const setTopScore = () => {
      if (score > topScore) {
        this.setState({topScore: score})
      }
    }

    const restartGame = () => {
      setTopScore()
      this.setState({ids: [], score: 0, gameOver: false})
    }

    const renderWinOrLoseCard = () => (
      <WinOrLose restartGame={restartGame} score={score} answer={result} />
    )

    const emojiClick = value => {
      if (ids.length === 0) {
        this.setState({
          ids: [...ids, value],
          score: 1,
        })
      } else if (ids.includes(value)) {
        this.setState({gameOver: true, result: false})
        renderWinOrLoseCard()
      } else if (ids.length === 11) {
        this.setState({score: 12, gameOver: true, result: true})
        renderWinOrLoseCard()
      } else {
        this.setState(prevState => ({
          ids: [...ids, value],
          score: prevState.score + 1,
        }))
      }
    }

    const renderGame = () => {
      const shuffledEmojis = shuffledEmojisList()
      return (
        <ul className="container">
          {shuffledEmojis.map(emoji => (
            <EmojiCard
              key={emoji.id}
              emojiId={emoji.id}
              emojiName={emoji.emojiName}
              emojiUrl={emoji.emojiUrl}
              emojiClick={emojiClick}
            />
          ))}
        </ul>
      )
    }
    return (
      <div className="bg">
        <div className="nav">
          <Navbar topScore={topScore} score={score} />
        </div>
        {gameOver ? renderWinOrLoseCard() : renderGame()}
      </div>
    )
  }
}
export default EmojiGame
