import React, {useState} from 'react';
import Expense from "./Components/Expenses/Expense";
import NewExpense from './Components/NewExpense/NewExpense';


//now if we had for expenses than we do as below
let DUMMY_EXPENSE = [
  {
    id:'e1',
    title:'School Fee',
    amount:250,
    date:new Date(2022,2,25),
  },
  {
    id:'e2',
    title:'Books',
    amount:230,
    date:new Date(2022,5,20),
  },
  {
    id:'e3',
    title:'House rent',
    amount:700,
    date:new Date(2022,4,15),
  },
  {
    id:'e4',
    title:'Food',
    amount:550,
    date:new Date(2022,5,5),
  }

  
]



const App = () => {
//belowcode is used for props
  // let expenseDate = new Date(2022,2,1);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;
//  belowcode is used for props end
  

const[expenses, setExpenses] = useState(DUMMY_EXPENSE);

const addExpenseHandler = (expense) =>{
  console.log(expense);
  const updatedExpense = [expense, ...expenses];
  setExpenses(updatedExpense);
}

  return (
  <>

  {/* <Expenceitem 
  date={expenses[0].date} 
  title = {expenses[0].title} 
  amount = {expenses[0].amount}/>
  <Expenceitem 
  date={expenses[1].date} 
  title = {expenses[1].title} 
  amount = {expenses[1].amount}/>
  <Expenceitem 
  date={expenses[2].date} 
  title = {expenses[2].title} 
  amount = {expenses[2].amount}/>
  <Expenceitem 
  date={expenses[3].date} 
  title = {expenses[3].title} 
  amount = {expenses[2].amount}/> */}
  <NewExpense onAddExpense = {addExpenseHandler}/>
  <Expense item={expenses}></Expense>
  </>    
  );
}

export default App;
