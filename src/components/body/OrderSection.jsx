// export default OrderSection;
import React, { useState } from "react";
import "../styles/OrderSection.css";
import DeliveryDay from "./DeliveryDay";

const initialProducts = [
  // your products list (no change)
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

const OrderSection = ({ onBack }) => {
  const [products, setProducts] = useState(initialProducts);
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
    <div className="order-section">
      <div className="order-header">
        <button className="back-btn" onClick={onBack}>
          ← Back
        </button>
        <h2>Create Order</h2>
      </div>

      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-img" />
            <div className="product-info">
              <h4>{item.name}</h4>
              <p>{item.size}</p>
              <p>ETB {item.price}</p>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity || 0}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

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

export default OrderSection;
