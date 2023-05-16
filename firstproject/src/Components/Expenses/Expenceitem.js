import React,{useState} from 'react';
import "./Expenceitem.css";
import Expensedate from './Expensedate';
import Card from '../UI/Card';
const Expenceitem = (props) => {
//   const month = props.date.toLocaleString('eng-US',{month:'long'});
//   const year = props.date.getFullYear();
//   const day = props.date.toLocaleString('eng-US',{day:'2-digit'});

// let title = props.title;

// const [newtitle,setNewTitle] = useState("");
// const[title,setTitle]=useState(props.title);

// const clcikhandler = ()=>{
//     // title = "New title";
//     // alert('click');
//     setTitle(newtitle);



// }   

// const changehandler = (event) =>{
//     setNewTitle(event.target.value);
// }
return (
    <div>
        <Card className='expense-item'>
            {/* <div>march 2022</div> */}
            {/* <div> { month } </div>
            <div> { year } </div>
            <div> { day } </div> */}
            <Expensedate date={props.date}/>
            <div className='expense-item__description'>
                {/* <h2>{title}</h2> */}
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <input type='text' value={newtitle} onChange={changehandler}/>
            <button onClick={clcikhandler}> change title</button> */}
        </Card>
       
    </div>
  )
}

export default Expenceitem