import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    console.log(number)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.generateNumber}
            className="button"
          >
            Generate
          </button>
          <p className="head2">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
