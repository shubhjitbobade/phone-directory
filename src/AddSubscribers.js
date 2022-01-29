import React, { Component } from "react";
import Header from "./Header";
import './AddSubscribers.css'

class AddSubscribers extends Component {
    render() {
        return (
            <div>
                <Header heading="Add Subscribers" />
                <div className="component-body-container">
                    <button className="custom-btn">back</button>

                    <form className="subscriber-form">
                        <label htmlFor="name" className="label-control">Name:</label><br />
                        <input type="text" className="input-control" name="name" /><br /><br />
                        <label htmlFor="phone" className="label-control">Phone:</label><br />
                        <input type="text" className="input-control" name="phone" /><br /><br />


                        <div className="suscriber-info-container">
                            <span className="subscriber-to-add-heading">Subcribers to be added</span><br />
                            <span className="subscriber-info">Name:</span><br />
                            <span className="subscriber-info">Phone:</span>
                        </div>
                        <button className="custom-btn add-btn" type="submit"> Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSubscribers;