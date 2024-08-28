import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="detailed-container">
          <div className="account-container">
            <div className="account-card">
              <h1 className="letter">S</h1>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-card-title">Your Balance</p>
            <div>
              <p className="balance">{count}</p>
              <span className="in">In Rupees</span>
            </div>
          </div>

          <p className="title">Withdraw</p>
          <p className="instruction">CHOOSE SUM (IN RUPEES)</p>
          <ul className="btn-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                updateBalance={this.updateBalance}
                btnDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
