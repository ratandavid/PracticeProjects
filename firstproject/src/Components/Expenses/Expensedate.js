import React from 'react'
import "./Expensedate.css";
const Expensedate = (props) => {
    const month = props.date.toLocaleString('eng-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('eng-US',{day:'2-digit'});
    return (
    <div className='expense-date'>
        <div className='expense-date__month'> { month } </div>
            <div className='expense-date__year'> { year } </div>
            <div className='expense-date__day'> { day } </div>
    </div>
  )
}

export default Expensedate