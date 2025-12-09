import React from "react";
import orderImg from "../../../public/OverlayImages/shopping-cart_6054069.png";
import festiveImage from "../../../public/OverlayImages/celebration_9765976.png";
import QuickOrderImg from "../../../public/OverlayImages/shopping-online(1).png";
import rewardImg from "../../../public/OverlayImages/reward.png";
import "../styles/Overlay.css";

const HeroOverlay = ({ onCreateOrder,onFestivityOrder,onQuickOrder,onRewardPoint }) => {
  return (
    <div className="overlay">
      <div className="topOverlay">
        <div className="orderingBtn" onClick={onCreateOrder}>
          <img src={orderImg} alt="cartImage" />
          <p>Create Order</p>
        </div>
        <div onClick={onFestivityOrder}>
          <img src={festiveImage} alt="festiveImg" />
          <p>Festivity Order</p>
        </div>
      </div>
      <div className="bottomOverlay">
        <div onClick={onQuickOrder}>
          <img src={QuickOrderImg} alt="quick order icon" />
          <p>Quick Order</p>
        </div>
        <div onClick={onRewardPoint}>
          <img src={rewardImg} alt="reward icon" />
          <p>Reward Points</p>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
