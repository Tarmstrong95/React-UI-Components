import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footerCont">
                    <a><i className="far fa-comment"></i></a>
                    <a><i className="fas fa-sync-alt"></i></a>
                    <a><i className="far fa-heart"></i></a>
                    <a><i className="far fa-envelope"></i></a>
            </div>
        )
    }
}






export default Footer;