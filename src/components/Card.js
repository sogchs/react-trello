import React from 'react';
import trelloService from '../services/TrelloService';

const Card = (props) => {

    const onClickDelete = () => {
        trelloService.deleteCard(props.id)
          .then(props.onDelete)
      }

    return(
    <div className="card mb-1" style={{width: "18rem"}}>
        <button type="button" className="close" aria-label="Close" onClick={onClickDelete}>
            <span aria-hidden="true">&times;</span>
        </button>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <div className="card-body">
            <img src={props.imageURL} className="card-img-top" alt="..."/>
        </div>
    </div>
    )
}

export default Card;