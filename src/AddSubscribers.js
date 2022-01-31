import React, { Component } from "react";
import Header from "./Header";
import './AddSubscribers.css';
import { Link } from 'react-router-dom';



class AddSubscribers extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }

    }
    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);

    }
    onFormSubmited = (e) => {
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({ id: 0, name: '', phone: '' });
        this.props.history.push("/");
    }
    render() {
        const { name, phone } = this.state;
        return (
            <div>
                <Header heading="Add Subscriber" />
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn">back</button></Link>

                    <form className="subscriber-form" onSubmit={this.onFormSubmited.bind(this)}>
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