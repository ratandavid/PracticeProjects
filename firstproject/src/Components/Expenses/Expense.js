import React from 'react'
import Expenceitem from '../Expenses/Expenceitem'
import Card from '../UI/Card';
import "./Expense.css";
const Expense =(props) => {
  return (
    <Card className='expenses'>
        {/* <Expenceitem 
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
  amount = {props.item[3].amount}/> */}


  {/* we do it by map method  */}
  {
      props.item.map(
        //ider jo expence hai vo dummy expence s expenses m aa rha hai app.js m phir yahan props k through item s map krke
        //parameter m pass kiya hai expense name s
        expence =>(

        
          <Expenceitem 
          date={expence.date} 
          title = {expence.title} 
          amount = {expence.amount}/>
          
          )

      )
  }
    </Card>
  )
}

export default Expense