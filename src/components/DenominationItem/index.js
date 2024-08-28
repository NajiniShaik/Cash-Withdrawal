import './index.css'

const DenominationItem = props => {
  const {btnDetails, updateBalance} = props
  const {value} = btnDetails

  const onClickSendValue = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button className="btn-element" type="button" onClick={onClickSendValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
