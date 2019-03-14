import React, { Component } from 'react';
import Column from './Column';
import trelloService from '../services/TrelloService'
import ColumnForm from './ColumnForm';




class Board extends Component {

    state = {
        columns: [],
        cards: []
    };
  



fetchColumns = () => {
  trelloService.getColumns()
    .then(columns => this.setState({ columns }))
}

componentDidMount() {
  this.fetchColumns();
}

render (){
    return(
        <div className="body-column">
        {this.state.columns.map(column => 
            <Column key={column.id} {...column} fetchColumns={this.fetchColumns}/> )}
            <ColumnForm nextPosition={this.state.columns.length + 1} fetchColumns={this.fetchColumns}/>
        </div>
    )
}}
  export default Board;