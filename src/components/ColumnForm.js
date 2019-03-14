import React, {Component} from 'react';
import FormField from './FormField';
import trelloService from '../services/TrelloService.js';

const validators = {
    title:     v => v.length > 0
  }

export default class ColumnForm extends Component {

    state = {
        column: {
          title: ''
        },
        errors: {
          title: true
        },
        touch: {
            title: false
        }
      }

      handleChange = (e) => {
        const { name, value } = e.target;
    
        const isValid = validators[name](value);
    
        this.setState({
          column: {
            ...this.state.column,
            [name]: value
          },
          errors: {
            ...this.state.errors,
            [name]: !isValid
          }
        })
      }
    
      handleBlur = (e) => {
        const { name } = e.target;
    
        this.setState({
          touch: {
            ...this.state.touch,
            [name]: true
          }
        })
      }
    
      createColumn = (e) => {
        e.preventDefault();
    
        const columnData = {
          ...this.state.column,
          position: this.props.nextPosition
        }
    
        trelloService.createColumn(columnData)
          .then(this.props.fetchColumns)
      }

    render(){

        const { column, touch, errors } = this.state;

        const isError = Object.values(errors).some(error => error);
      
      
    return(

   <div className="card-add-column">
        <div className="d-flex align-items-center">
            <h5 className="mr-1">Añadir nueva columna</h5> 
        </div>
        <form onSubmit={this.createColumn}>
            <FormField title="Title" name="title" 
                value={column.title}
                onChange={this.handleChange} 
                icon="fas fa-user" 
                error={this.state.errors.title}
                onBlur={this.handleBlur} 
                touch={this.state.touch.title}/>

            <div className="control">
                <button className="btn btn-primary mt-3" disabled={isError}>
                    <span>+ Add</span>
                </button>
            </div>
        </form>    
   </div>
   
   )
}}
