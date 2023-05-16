import './ExpenseForm.css';
import {useState} from 'react'
import ExpenseFormTemplate from './ExpenseFormTemplate';

function ExpenseForm(props) {
    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount,setEnterAmount] = useState('');
    const [enterDate,setEnterDate] = useState('');
     
    const titlechangeHandler = (event) =>{
        setEnterTitle(event.target.value);
    }
    const amountchangeHandler = (event) =>{
        setEnterAmount(event.target.value);
    }
    const datechangeHandler = (event) =>{
        setEnterDate(event.target.value);
    }
    const sumbitHandler = (event) =>{
        event.preventDefault();

    
        const expenseData = {
            title:enterTitle,
            amount:enterAmount,
            date: new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData);
        console.log(expenseData);


        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }
    return ExpenseFormTemplate({
        enterDate,
        enterTitle,
        enterAmount,
        sumbitHandler,
        amountchangeHandler,
        titlechangeHandler,
        datechangeHandler,
    })
}

export default ExpenseForm