import React, { Component } from 'react';
import Column from './Column';
import { getColumns } from '../services/TrelloService'
import { Link } from 'react-router-dom';


class Board extends Component {
  constructor(props){
    super(props)

    this.state = {
        columns: [],
        cards: []
    };
  }




componentDidMount(){
    getColumns().then(columns => this.setState({columns}));
}

render (){
    return(
        <div className="container d-flex">
        {this.state.columns.map((col, index) => 
            <Column key={index} {...col} /> )}
        
        <Link to={`/cardForm`}>+Add Card</Link>
        </div>
    )
}}
  export default Board;