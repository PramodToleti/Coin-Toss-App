import {Component} from 'react'
import './index.css'

const tossImages = {
  headsImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  tailsImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}

class CoinToss extends Component {
  state = {
    coinUrl: tossImages.headsImage,
    total: 0,
    heads: 0,
    tails: 0,
    isClicked: false,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        coinUrl: tossImages.headsImage,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        isClicked: !prevState.isClicked,
      }))
    } else {
      this.setState(prevState => ({
        coinUrl: tossImages.tailsImage,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        isClicked: !prevState.isClicked,
      }))
    }
  }

  render() {
    const {coinUrl, total, heads, tails, isClicked} = this.state
    const coinAnimation = isClicked ? 'coin-animation' : ''
    return (
      <div className="bg-container">
        <div className="toss-card">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="heads-tails">Heads (or) Tails</p>
          <img
            src={coinUrl}
            alt="toss result"
            className={`toss-image ${coinAnimation}`}
          />

          <button className="toss-button" onClick={this.tossCoin} type="button">
            Toss Coin
          </button>
          <div className="toss-results-container">
            <p className="toss-results">Total: {total}</p>
            <p className="toss-results">Heads: {heads}</p>
            <p className="toss-results">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
