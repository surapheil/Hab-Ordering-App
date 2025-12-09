import React, { useState } from "react";
import "../styles/FestivityOrder.css";
import QuickOrderImg from "../../../public/OverlayImages/Gemini_Generated_Image_hcliohcliohclioh.png";
import DeliveryDay from "./DeliveryDay"; // ✅ Import DeliveryDay

const initialFestiveProducts = [
  {
    id: 1,
    name: "Habesha 6-bottles",
    price: 550,
    size: "330ml - Crate 6 Bottles",
    image: "../../../public/OverlayImages/Habesha - New Bottle - 2023.png",
    badge: "Buyers choice",
  },
  {
    id: 2,
    name: "Nigus 6-bottles",
    price: 500,
    size: "330ml - Crate 6 Bottles",
    image: "../../../public/OverlayImages/nigus.jpeg",
    badge: "Buyers choice",
  },
  {
    id: 3,
    name: "Feta 6-bottles",
    price: 400,
    size: "330ml - Crate 6 Bottles",
    image: "../../../public/OverlayImages/Feta - Updated Bottle - July 11, 2024.png",
    badge: "Buyers choice",
  },
  {
    id: 4,
    name: "Kostara 6-bottles",
    price: 550,
    size: "330ml - Crate 6 Bottles",
    image: "../../../public/OverlayImages/Kostara copy (1).png",
    badge: "Buyers choice",
  },
  {
    id: 5,
    name: "Kidame 6 bottles",
    price: 1350,
    size: "330ml - Crate 6 Bottles",
    image: "../../../public/OverlayImages/kidame.png",
    badge: "Buyers choice",
  }
];

const QuickOrder = ({ onBack }) => {
  const [products, setProducts] = useState(initialFestiveProducts);
  const [showDelivery, setShowDelivery] = useState(false);

  const updateQuantity = (id, change) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, (item.quantity || 0) + change) }
          : item
      )
    );
  };

  const selectedProducts = products.filter((p) => p.quantity > 0);

  // ⭐ When Next is clicked, show DeliveryDay
  if (showDelivery) {
    return (
      <DeliveryDay
        selectedProducts={selectedProducts}
        onBack={() => setShowDelivery(false)}
        onFinish={onBack}
      />
    );
  }

  return (
    <div className="festivity-section">
      {/* === Header Section === */}
      <div className="order-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2>Quick Order</h2>
      </div>

      {/* === Top Banner === */}
      <div className="festivity-banner">
        <img src={QuickOrderImg} alt="Festivity" />
        <div className="banner-overlay">
          <h1>From Comfort of Your Home!</h1>
          <p>Luxury. Taste. Tradition — redefined for your Relaxation.</p>
        </div>
      </div>

      {/* === Product List === */}
      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-img" />

            <div className="product-info">
              <span className="product-badge">{item.badge}</span>
              <h4 className="product-name">{item.name}</h4>
              <p className="product-size">{item.size}</p>
              <p className="product-price">ETB {item.price.toFixed(2)}</p>
              <a href="#" className="details-link">
                See details
              </a>
            </div>

            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity || 0}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      {/* === Bottom Next Button (Same as OrderSection) === */}
      <div className="bottom-btns">
        <button
          className="next-btn"
          disabled={selectedProducts.length === 0}
          onClick={() => setShowDelivery(true)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default QuickOrder;
