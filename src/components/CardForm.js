import React, {Component} from 'react';


class CardForm extends Component {


state = {

}

render(){

    return(
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Description</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Position</label>
                <input type="Number" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Objetc Id Column</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
}

export default CardForm;


