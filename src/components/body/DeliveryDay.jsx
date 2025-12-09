import React, { useState } from "react";
import "../styles/DeliveryDay.css";

const DeliveryDay = ({ selectedProducts, onBack, onFinish }) => {
  const [deliveryDate, setDeliveryDate] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const totalPrice = selectedProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const rewardPoints = Math.floor(totalPrice / 80);

  return (
    <div className="delivery-day">
      <div className="delivery-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2>Delivery & Summary</h2>
      </div>

      <div className="summary-card">
        <h3>Order Summary</h3>
        <p>Total Amount: <strong>ETB {totalPrice.toFixed(2)}</strong></p>
        <p>Loyalty Reward: <strong>{rewardPoints} pts</strong></p>

        <label className="delivery-label">Select Delivery Date:</label>
        <input
          type="date"
          className="delivery-input"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        />

        <button
          className="finish-btn"
          disabled={!deliveryDate}
          onClick={() => setShowSummary(true)}
        >
          Finish
        </button>
      </div>

      {/* POPUP SUMMARY */}
      {showSummary && (
        <div className="popup-overlay">
          <div className="popup-summary">
            <button className="close-btn" onClick={onFinish}>✕</button>
            <h3>🎉 Order Summary</h3>
            <ul>
              {selectedProducts.map((item) => (
                <li key={item.id}>
                  {item.name} × {item.quantity} —{" "}
                  <strong>ETB {(item.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <hr />
            <p><strong>Total:</strong> ETB {totalPrice.toFixed(2)}</p>
            <p><strong>Reward Points:</strong> {rewardPoints} pts</p>
            <p><strong>Delivery Date:</strong> {deliveryDate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryDay;



