import React from "react";
import "./UnderConstruction.css";
import constructionImage from "../../../assets/under-construction.svg";

const UnderConstruction = () => {
  return (
    <div className="container" data-testid="under-construction">
      <img src={constructionImage} alt="Under Construction" className="construction-image" />
      <h1 className="construction-title">We're working on it!</h1>
      <p className="construction-description">This page is currently under construction. Please check back later.</p>
    </div>
  );
};

export default UnderConstruction;