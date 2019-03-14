import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import FormField from './FormField';
import trelloService from '../services/TrelloService';


// const queryString = require('query-string');

const validators = {
    title:     v => v.length > 0,
    description:    v => v.length > 0,
    position: v => v.length > 0,
    column: v => v.length > 0
  }
class CardForm extends Component {

    state = {
        card: {
          title: '',
          description: '',
          position: '',
          column: this.props.match.params.id,
          attach:'',
          filePreview:''
        },
        errors: {
          title: true,
          description: true,
          position: true
        },
        touch: {},
        onSubmit: false
      }

      handleChange = (e) => {
        const { name, value, files } = e.target;
    
        const isValid = validators[name] === undefined || validators[name](value);
    
        this.setState({
          card: {
            ...this.state.card,
            [name]: (files && files[0]) ? files[0] : value
          },
          errors: {
            ...this.state.errors,
            [name]: !isValid
          } 
          
        })
      }

      handleBlur = (e) => {
        this.setState({
          touch: {
            ...this.state.touch,
            [e.target.name]: true
          }
        })
      }
    


    postCard = (e) => {
      e.preventDefault();
  
      const cardData = {
        ...this.state.card
      }
  
      trelloService.postCard(cardData)
        .then(() => this.setState({ onSubmit: true }))
    }

    

render(){
  

  if (this.state.onSubmit) {
    return (
    <Redirect to='/' />
    )} else {

      const isError = Object.values(this.state.errors).some(error => error);
    

    return(
        <div className="container col-4 mt-5">
        <form onSubmit={this.postCard}>
          <FormField title="Title" name="title" value={this.state.card.title}
            onChange={this.handleChange} icon="fas fa-user" error={this.state.errors.title}
            onBlur={this.handleBlur} touch={this.state.touch.title}/>

          <FormField title="Description" name="description" value={this.state.card.description}
            onChange={this.handleChange} icon="fas fa-at" type="text"
            error={this.state.errors.description} onBlur={this.handleBlur} touch={this.state.touch.description} />

          <FormField title="Position" name="position" value={this.state.card.position}
            onChange={this.handleChange} icon="fas fa-key" type="Number"
            error={this.state.errors.position} onBlur={this.handleBlur} touch={this.state.touch.position} />


          {this.state.card.attach && <img className="img-upload" src={URL.createObjectURL(this.state.card.attach)} alt="..."/>}

            <button type="button" className="bot btn btn-outline-primary">
              <input 
                  type="file" 
                  className="custom-file-input" 
                  name="attach" id="attach" 
                  aria-describedby="attach"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  lang="es"/> <i className="abc fas fa-plus"></i>
            </button>

          <div className="control">
            <button className="btn btn-primary mt-3" disabled={isError}>
              <span>+ Add</span>
            </button>
          </div>
        </form>
      </div>

    )
}}
}

export default CardForm;


