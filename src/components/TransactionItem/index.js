import './index.css'

const TransactionItem = props => {
  const {eachItem, onDeleteHistory} = props
  const {Name, amount, Type, ID} = eachItem
  const ondeleteFunction = () => {
    onDeleteHistory(ID)
  }
  return (
    <li className="listBlock">
      <p>{Name}</p>
      <p>RS {amount}</p>
      <p>{Type}</p>
      <button
        type="submit"
        testid="delete"
        className="deleteButton"
        onClick={ondeleteFunction}
      >
        <img
          className="deleteimage"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
