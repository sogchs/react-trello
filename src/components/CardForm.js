import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import FormField from './FormField';

const validators = {
    title:     v => v.length > 0,
    description:    v => v.length > 0,
    position: v => v.length > 0
  }
class CardForm extends Component {

    state = {
        card: {
          title: '',
          description: '',
          position: '',
          column: ''
        },
        errors: {
          title: true,
          description: true,
          position: true
        },
        touch: {},
        toCards: false
      }

      handleChange = (e) => {
        const { name, value, type, checked } = e.target
    
        const error = {
          [name]: !validators[e.target.name]
        }
    
        this.setState({
          card: {
            ...this.state.card,
            [name]: type == 'checkbox' ? checked : value
          },
          errors: {
            ...this.state.errors,
            ...error
          }
        });
      }

      handleBlur = (e) => {
        this.setState({
          touch: {
            ...this.state.touch,
            [e.target.name]: true
          }
        })
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        this.setState({ toCards: true }, () => this.props.onAddCard({ ...this.state.card }));
      };
    

render(){
    if (this.state.toUsers) {
        return <Redirect exact to="/"/>
      }

      const isError = Object.values(this.state.errors).some(error => error);


    return(
        <div className="container col-4 mt-5">
        <form onSubmit={this.handleSubmit}>
          <FormField title="Title" name="title" value={this.state.card.title}
            onChange={this.handleChange} icon="fas fa-user" error={this.state.errors.title}
            onBlur={this.handleBlur} touch={this.state.touch.title}/>

          <FormField title="Description" name="description" value={this.state.card.description}
            onChange={this.handleChange} icon="fas fa-at" type="text"
            error={this.state.errors.description} onBlur={this.handleBlur} touch={this.state.touch.description} />

          <FormField title="Position" name="position" value={this.state.card.position}
            onChange={this.handleChange} icon="fas fa-key" type="Number"
            error={this.state.errors.position} onBlur={this.handleBlur} touch={this.state.touch.position} />

          <div className="control">
            <button className="button is-info" disabled={isError}>
              <span className="icon is-small">
                <i className="fas fa-check"></i>
              </span>
              <span>+ Add</span>
            </button>
          </div>
        </form>
      </div>
        // <form className="container col-4 mt-5">
        //     <h2>Add new Card</h2>
        //     <div className="form-group">
        //         <label htmlFor="exampleInputEmail1">Title</label>
        //         <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"/>
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="exampleInputPassword1">Description</label>
        //         <textarea type="text" className="form-control" id="exampleInputPassword1" placeholder="Article Description"/>
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="exampleInputPassword1">Position</label>
        //         <input type="Number" className="form-control" id="exampleInputPassword1" placeholder="Number"/>
        //     </div>
        //     <div className="form-group">
        //         <label htmlFor="exampleInputPassword1">Objetc Id Column</label>
        //         <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        //     </div>
        //     <button type="submit" className="btn btn-primary">Submit</button>
        // </form>
    )
}
}

export default CardForm;


