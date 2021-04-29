// Write your code here.
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  render() {
    const {emojiName, emojiUrl, emojiClick, emojiId} = this.props
    const emojiClicked = () => {
      emojiClick(emojiId)
    }
    return (
      <li className="emoji-card" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} className="card" />
      </li>
    )
  }
}
export default EmojiCard
