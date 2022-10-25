import React from 'react';
import "./Expenceitem.css";
import Expensedate from './Expensedate';
import Card from '../UI/Card';
const Expenceitem = (props) => {
//   const month = props.date.toLocaleString('eng-US',{month:'long'});
//   const year = props.date.getFullYear();
//   const day = props.date.toLocaleString('eng-US',{day:'2-digit'});
    return (
    <div>
        <Card className='expense-item'>
            {/* <div>march 2022</div> */}
            {/* <div> { month } </div>
            <div> { year } </div>
            <div> { day } </div> */}
            <Expensedate date={props.date}/>
            <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        </Card>
       
    </div>
  )
}

export default Expenceitem