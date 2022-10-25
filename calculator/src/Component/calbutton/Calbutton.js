import React from 'react'

function Calbutton() {

   const button = [1,2,3,4,5,6,7,8,9,0,"+","-",'/','*',"="];
   let buttonlist =[]; 
   button.forEach((button) =>{
        buttonlist.push(<button >{button}</button>)
   })
   




return (
    <>
      <div className='button'>  
        {/* <button>{props.num}</button> */}
        {buttonlist}
      </div>  
    </>
  )
}

export default Calbutton