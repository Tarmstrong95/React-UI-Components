import React from "react";
import "./Card.css";
import CardContent from './CardContent';
import Footer from '../FooterComponents/Footer';

const CardBanner = () => {
  return (
    <div className="card-banner">
      <img src="/images/social-card.png" />
      <CardContent />
      <Footer />
    </div>
  );
};

export default CardBanner;
