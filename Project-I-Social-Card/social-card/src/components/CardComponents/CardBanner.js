import React, { Component } from "react";
import "./Card.css";
import CardContent from "./CardContent";
import Footer from '../FooterComponents/Footer'

class CardBanner extends Component {
  render() {
    return (
      <div className="bannerCont">
        <img className="bannerImg" src="/Images/social-card.png" />
        <CardContent />
        <Footer />
      </div>
    );
  }
}

export default CardBanner;
