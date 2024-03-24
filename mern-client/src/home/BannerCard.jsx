import React from "react";
import { useState } from "react";

const BannerCard = () => {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return <div className="banner"></div>;
};

export default BannerCard;
