import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalExpenses, totalIncome} = props
  return (
    <div className="mainContainer">
      <div className="moneyContainerBalence">
        <img
          className="MoneyImage"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="moneyDetailsContainer">
          <p>Your Balance</p>
          <p className="balenceText" testid="balanceAmount">
            RS {totalBalance}
          </p>
        </div>
      </div>
      <div className="moneyContainerIncome">
        <img
          className="MoneyImage"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/Income-image.png"
          alt="totalIncome"
        />
        <div className="moneyDetailsContainer">
          <p>Your Income</p>
          <p className="balenceText" testid="totalIncomeAmount">
            RS {totalIncome}
          </p>
        </div>
      </div>
      <div className="moneyContainerExpenses">
        <img
          className="MoneyImage"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="moneyDetailsContainer">
          <p>Your Expenses</p>
          <p className="balenceText" testid="expensesAmount">
            RS {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
