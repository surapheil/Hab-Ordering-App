import React, { useState } from "react";
import "../styles/FestivityOrder.css";
import festivityBanner from "../../../public/OverlayImages/wedding.png";
import DeliveryDay from "./DeliveryDay"; // <-- import DeliveryDay

const initialFestiveProducts = [
  {
    id: 1,
    name: "Habesha Crate 24x33cl",
    price: 1400,
    size: "330ml - Crate 24 Bottles",
    image: "../../../public/OverlayImages/Habesha - New Bottle - 2023.png",
    badge: "Buyers choice",
  },
  {
    id: 2,
    name: "Nigus Crate 24x33cl",
    price: 1200,
    size: "330ml - Crate 24 Bottles",
    image: "../../../public/OverlayImages/nigus.jpeg",
    badge: "Buyers choice",
  },
  {
    id: 3,
    name: "Feta Crate 24x33cl",
    price: 1200,
    size: "330ml - Crate 24 Bottles",
    image: "../../../public/OverlayImages/Feta - Updated Bottle - July 11, 2024.png",
    badge: "Buyers choice",
  },
  {
    id: 4,
    name: "Kostara Crate 24x33cl",
    price: 1400,
    size: "330ml - Crate 24 Bottles",
    image: "../../../public/OverlayImages/Kostara copy (1).png",
    badge: "Buyers choice",
  },
  {
    id: 5,
    name: "Kidame Crate 24x33cl",
    price: 1000,
    size: "330ml - Crate 24 Bottles",
    image: "../../../public/OverlayImages/kidame.png",
    badge: "Buyers choice",
  },
  {
    id: 6,
    name: "Habesha Keg 30L",
    price: 3400,
    size: "Keg | 30L . Keg 1 Unit",
    image: "../../../public/OverlayImages/habesha-draught.png",
    badge: "Buyers choice",
  },
  {
    id: 7,
    name: "Kidame Keg 30L",
    price: 2700,
    size: "Keg | 30L . Keg 1 Unit",
    image: "../../../public/OverlayImages/kidame.jpg",
    badge: "Buyers choice",
  },
];

const FestivityOrder = ({ onBack }) => {
  const [products, setProducts] = useState(initialFestiveProducts);
  const [showDelivery, setShowDelivery] = useState(false);

  // Update quantity
  const updateQuantity = (id, change) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, (item.quantity || 0) + change) }
          : item
      )
    );
  };

  // Filter selected items
  const selectedProducts = products.filter((p) => p.quantity > 0);

  // When Next clicked, show DeliveryDay (same behavior as QuickOrder)
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
        <h2>Festivity Order</h2>
      </div>

      {/* === Top Banner === */}
      <div className="festivity-banner">
        <img src={festivityBanner} alt="Festivity" />
        <div className="banner-overlay">
          <h1>Celebrate in Style</h1>
          <p>Luxury. Taste. Tradition — redefined for your grand moments.</p>
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

      {/* === Bottom Next Button (Same as QuickOrder) === */}
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

export default FestivityOrder;
