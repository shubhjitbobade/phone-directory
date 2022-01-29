import React, { Component } from "react";
import Header from "./Header";
import './AddSubscribers.css'

class AddSubscribers extends Component {
    constructor() {
        super();
        this.state = {
            id:0,
            name:'',
            phone:''
        }
        console.log(this.state);
    }
    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }
    render() {
const {name , phone}= this.state;
        return (
            <div>
                <Header heading="Add Subscribers" />
                <div className="component-body-container">
                    <button className="custom-btn">back</button>

                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control" >Name:</label><br />
                        <input type="text" className="input-control" name="name" onChange={this.inputChangedHandler} /><br /><br />
                        <label htmlFor="phone" className="label-control">Phone:</label><br />
                        <input type="text" className="input-control" name="phone" onChange={this.inputChangedHandler} /><br /><br />


                        <div className="suscriber-info-container">
                            <span className="subscriber-to-add-heading">Subcribers to be added</span><br />
                            <span className="subscriber-info">Name:{name}</span><br />
                            <span className="subscriber-info">Phone:{phone}</span>
                        </div>
                        <button className="custom-btn add-btn" type="submit"> Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscribers;