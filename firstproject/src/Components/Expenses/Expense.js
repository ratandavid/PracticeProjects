import React from 'react'
import Expenceitem from '../Expenses/Expenceitem'
import Card from '../UI/Card';
import "./Expense.css";
const Expense =(props) => {
  return (
    <Card className='expenses'>
        <Expenceitem 
  date={props.item[0].date} 
  title = {props.item[0].title} 
  amount = {props.item[0].amount}/>
  <Expenceitem 
  date={props.item[1].date} 
  title = {props.item[1].title} 
  amount = {props.item[1].amount}/>
  <Expenceitem 
  date={props.item[2].date} 
  title = {props.item[2].title} 
  amount = {props.item[2].amount}/>
  <Expenceitem 
  date={props.item[3].date} 
  title = {props.item[3].title} 
  amount = {props.item[2].amount}/>
    </Card>
  )
}

export default Expense