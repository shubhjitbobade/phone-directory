import React, { Component } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 0,
                name: 'abhi',
                phone: '95154265'
            },
            {
                id: 1,
                name: 'shubhjit',
                phone: '985021133'
            }
            ]
        }

    }
    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({ subscribers: newSubscribers });
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscibersList: subscribersList });

    }
    render() {
        return (

            <Router>
                <Routes>
                    <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                    <Route exact path="/add" render={({ history }, props) => <AddSubscribers history={history} {...props} addSubscriberHandler={this.addSubscribersHandler} />} />
                </Routes>
            </Router>

        )
    }
}
export default PhoneDirectory;