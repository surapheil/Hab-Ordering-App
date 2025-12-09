import React, { useState } from "react";
import "../styles/RewardPoints.css";

const rewardProducts = [
  {
    id: 1,
    name: "Habesha 1 - Crate",
    size: "Crate | 330ml - Crate 24 Bottles",
    points: 210,
    image: "../../../public/OverlayImages/Habesha - New Bottle - 2023.png",
  },
  {
    id: 2,
    name: "Nigus Full-Crate",
    size: "Crate | 330ml - Crate 24 Bottles",
    points: 277,
    image: "../../../public/OverlayImages/nigus.jpeg",
  },
  {
    id: 3,
    name: "Feta full crate - Loyalty",
    size: "Crate | 330ml - Crate 24 Bottles",
    points: 295,
    image: "../../../public/OverlayImages/Feta - Updated Bottle - July 11, 2024.png",
  },
  {
    id: 4,
    name: "Habesha Keg 30L ET LRM",
    size: "Keg | 30L - Keg 1 Unit",
    points: 657,
    image: "../../../public/OverlayImages/habesha-draught.png",
  },
  {
    id: 5,
    name: "Kidame Full crate - Loyalty",
    size: "Crate | 330ml - Crate 24 Bottles",
    points: 210,
    image: "../../../public/OverlayImages/sofi.png",
  },
];

const RewardPoints = ({ onBack }) => {
  const [redeemed, setRedeemed] = useState([]);
  const [totalPoints, setTotalPoints] = useState(2340);
  const [showHistory, setShowHistory] = useState(false);

  // Determine Level
  const getLevel = (points) => {
    if (points >= 3000) return "Platinum";
    if (points >= 1500) return "Gold";
    if (points >= 800) return "Silver";
    return "Bronze";
  };

  const handleRedeem = (id, cost) => {
    if (totalPoints < cost) {
      alert("❌ Not enough points to redeem this item.");
      return;
    }
    setRedeemed((prev) => [...prev, id]);
    setTotalPoints((prev) => prev - cost);
  };

  return (
    <div className="reward-section">
      {/* Header */}
      <div className="reward-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2>Reward Points</h2>
      </div>

      {/* Points Summary */}
      <div className="points-summary">
        <div className="points-card">
          <h3 className="level-title">{getLevel(totalPoints)} Member 🏅</h3>
          <h1 className="glow-points">{totalPoints.toLocaleString()} pts</h1>

          <div className="points-progress">
            <div
              className="progress-bar"
              style={{ width: `${(totalPoints / 3000) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">Goal: 3000 pts</p>

          <button
            className="history-btn"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide Redeem History" : "Show Redeem History"}
          </button>

          {showHistory && (
            <div className="history-list">
              {redeemed.length === 0 ? (
                <p className="empty-history">No rewards redeemed yet.</p>
              ) : (
                redeemed.map((id) => {
                  const item = rewardProducts.find((p) => p.id === id);
                  return (
                    <div key={id} className="history-item">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <span>-{item.points} pts</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      </div>

      {/* Reward Products */}
      <div className="reward-list">
        {rewardProducts.map((item) => (
          <div key={item.id} className="reward-card">
            <img src={item.image} alt={item.name} className="reward-img" />
            <div className="reward-info">
              <h4>{item.name}</h4>
              <p className="reward-size">{item.size}</p>
              <p className="reward-points">{item.points} points</p>
              <a href="#" className="details-link">See details</a>
            </div>
            <div className="reward-actions">
              <button
                className="redeem-btn"
                disabled={redeemed.includes(item.id)}
                onClick={() => handleRedeem(item.id, item.points)}
              >
                {redeemed.includes(item.id) ? "Redeemed" : "Redeem"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RewardPoints;
