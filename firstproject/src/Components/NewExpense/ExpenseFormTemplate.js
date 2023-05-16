import './ExpenseForm.css';

function ExpenseFormTemplate(model) {
    return (
    <form onSubmit={model.sumbitHandler}>
        <div className='new-expense__controls'>
            <div className='control'>
                <label>Title</label>
                <input type='text' value={model.enterTitle} onChange={model.titlechangeHandler}/>
            </div>
            <div className='control'>
                <label>Amount</label>
                <input type='number' value={model.enterAmount}  onChange={model.amountchangeHandler}/>
            </div>
            <div className='control'>
                <label>Date</label>
                <input type='date' value={model.enterDate} onChange={model.datechangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions '>
            <button type="submit">
                Add Expense
            </button>
        </div>
    </form>
  )
}

export default ExpenseFormTemplate;