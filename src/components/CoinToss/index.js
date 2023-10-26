// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {headCount: 0, tailCount: 0, num: 0}

  onPress = () => {
    this.state.num = Math.floor(Math.random() * 2)
    const {num} = this.state
    console.log(num)
    if (num === 0) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
      }))
    }
  }

  render() {
    const {headCount, tailCount, num} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">Coin Toss Game</h1>
          <p className="main-para">Heads (or) Tails</p>
          {num === 0 && (
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}
          {num === 1 && (
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button type="button" className="btn" onClick={this.onPress}>
            Toss Coin
          </button>
          <div className="cont">
            <p className="para">Total: {headCount + tailCount}</p>
            <p className="para">Heads: {headCount}</p>
            <p className="para">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
