import React, {Component} from 'react';
import './Card.css';




class CardContent extends Component{
    render(){
        return (
            <div className="contentCont">
                <h1>Get started with React</h1>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
                <p className="reactSite">reactjs.org</p>
            </div>
        )
    }
}



export default CardContent;