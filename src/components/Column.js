import React from 'react';
import Card from './Card';



const Column = (props) => {

   console.log(props);

   return(

   <div >
      <span>{props.position} </span> 
      <span>{props.title} </span>
      {props.cards.map((card, index) => <Card key=
      {index}{...card}/> )} 
   </div>
   )
}

   

   


export default Column;