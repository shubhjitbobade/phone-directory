import React, { Component } from "react";
import AddSubscribers from "./AddSubscribers";
import ShowSubscribers from './ShowSubscribers';

class phoneDirectory extends Component {
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
        // <AddSubscribers addSubscriberHandler={this.addSubscriberHandler}/>
        <ShowSubscribers  subscribersList={this.state.subscribersList}/>
        )
    }
}
export default phoneDirectory;