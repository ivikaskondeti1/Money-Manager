import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    TransactionHistory: [],
    Options: transactionTypeOptions[0].optionId,
    totalBalance: 0,
    totalExpenses: 0,
    totalIncome: 0,
    titleInput: '',
    amountInput: '',
  }

  changeOption = event => {
    this.setState({Options: event.target.value})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  addValues = event => {
    event.preventDefault()
    const {Options, titleInput, amountInput} = this.state
    const filteredOption = transactionTypeOptions.filter(
      eachlist => eachlist.optionId === Options,
    )
    const newObj = {
      ID: uuidv4(),
      Name: titleInput,
      amount: amountInput,
      Type: filteredOption[0].displayText,
    }

    if (Options === transactionTypeOptions[0].optionId) {
      this.setState(prevState => ({
        TransactionHistory: [...prevState.TransactionHistory, newObj],
        Options: transactionTypeOptions[0].optionId,
        totalBalance:
          parseInt(prevState.totalBalance) + parseInt(prevState.amountInput),
        totalIncome:
          parseInt(prevState.totalIncome) + parseInt(prevState.amountInput),
        titleInput: '',
        amountInput: '',
      }))
    } else {
      console.log('kondeti')
      this.setState(prevState => ({
        TransactionHistory: [...prevState.TransactionHistory, newObj],
        Options: transactionTypeOptions[0].optionId,
        totalBalance:
          parseInt(prevState.totalBalance) - parseInt(prevState.amountInput),
        totalExpenses:
          parseInt(prevState.totalExpenses) + parseInt(prevState.amountInput),
        titleInput: '',
        amountInput: '',
      }))
    }
  }

  onDeleteHistory = ID => {
    const {TransactionHistory} = this.state
    console.log(ID)
    const FilteredList = TransactionHistory.filter(
      eachlist => eachlist.ID === ID,
    )
    const FilteredHistory = TransactionHistory.filter(
      eachlist => eachlist.ID !== ID,
    )
    console.log(FilteredList)
    if (FilteredList[0].Type === transactionTypeOptions[0].displayText) {
      this.setState(prevState => ({
        TransactionHistory: FilteredHistory,
        totalBalance:
          parseInt(prevState.totalBalance) - parseInt(FilteredList[0].amount),
        totalIncome:
          parseInt(prevState.totalIncome) - parseInt(FilteredList[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        TransactionHistory: FilteredHistory,
        totalBalance:
          parseInt(prevState.totalBalance) + parseInt(FilteredList[0].amount),
        totalExpenses:
          parseInt(prevState.totalExpenses) - parseInt(FilteredList[0].amount),
      }))
    }
  }

  render() {
    const {
      totalBalance,
      totalExpenses,
      totalIncome,
      TransactionHistory,
      titleInput,
      amountInput,
      Options,
    } = this.state
    return (
      <div className="mainPage">
        <div className="headingBlock">
          <h1 className="headingText">Hi, Rechard</h1>
          <p className="wellcomeText">
            Welcome back to your{' '}
            <span className="moneyText">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          totalBalance={totalBalance}
          totalExpenses={totalExpenses}
          totalIncome={totalIncome}
        />
        <div className="TransactionsContainer">
          <form onSubmit={this.addValues}>
            <div className="FormContainer">
              <h1>Add Transaction</h1>
              <label htmlFor="TITLE">TITLE</label>
              <input
                value={titleInput}
                type="text"
                placeholder="TITLE"
                id="TITLE"
                onChange={this.onChangeTitle}
              />

              <label htmlFor="AMOUNT">AMOUNT</label>
              <input
                value={amountInput}
                type="number"
                placeholder="AMOUNT"
                id="AMOUNT"
                onChange={this.onChangeAmount}
              />
              <label htmlFor="TYPE">TYPE</label>
              <select id="TYPE" onChange={this.changeOption} value={Options}>
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <>
                <button type="submit" className="registerbtn">
                  Add
                </button>
              </>
            </div>
          </form>
          <div className="TransactionDetailsContainer">
            <h1>History</h1>
            <div className="listBoc">
              <p>Title</p>
              <p>Amount</p>
              <p>Type</p>
              <p className="de">D</p>
            </div>
            <ul>
              {TransactionHistory.map(eachItem => (
                <TransactionItem
                  eachItem={eachItem}
                  key={eachItem.ID}
                  onDeleteHistory={this.onDeleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
