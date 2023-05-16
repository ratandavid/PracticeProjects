import React from "react";
import "./newexpense.css";


import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    // child s parent m data bhejna hai to kase bheje gey 
    // step1   parent m ek function banana hai(saveExpenseDataHandler)
    const saveExpenseDataHandler=(enterExpenseData) =>{
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }
return(
    <div className="new-expense">
       {/*step2  us function ko props k through pass krna hai */}
        <ExpenseForm 
        onSaveExpenseData=
        {saveExpenseDataHandler}/>
    </div>
);
}

export default NewExpense;