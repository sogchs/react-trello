import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import trelloService from '../services/TrelloService';



const Column = ({ cards, title, position, id, fetchColumns }) => {

   const deleteColumn = () => {
      trelloService.deleteColumn(id)
        .then(fetchColumns)
    }
   return(

   <div className="card-column">
      <div className="d-flex align-items-center">
         <h5 className="mr-1">{position} </h5> 
         <h5>{title} </h5>
         <button type="button" className="close" aria-label="Close" onClick={deleteColumn}>
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div>
         {cards.map((card) => <Card key=
         {card.id}{...card} onDelete={fetchColumns}/> )}
      </div>  
      <div className="mt-3">
         <Link to={`/cardForm/${id}`} params={id} className="add-card">+Add Card</Link>
      </div>   
       

   </div>
   
   )
}

   

   


export default Column;