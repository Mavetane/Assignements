import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            information: []
        }
    }
   handleChange=(e)=>{
      let details = this.setState({
           name: e.target.value,
           email: e.target.value,
           message: e.target.value
       })
       details.push(this.state.information)
   }
   handleSubmit=(e)=> {
       this.handleChange(e)
   }

    render() {
        console.log("I'm the info", this.state.information)
        return (
            <div>
                <form onSubmit={(e)=>this.handleChange(e)}>
                <label >Name:</label> <input type="text"/>
                <br/>
                <label>Email:</label> <input type="text"/>
                <br/>
                <label>Message:</label> <textarea></textarea>
                <br/>
                <button onClick={(e)=>this.handleChange(e)}>Submit</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {

};

export default Form;