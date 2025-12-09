import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import PhotoSlider from "./components/body/photoSlide";
import HeroOverlay from "./components/body/HeroOverlay";
import OrderSection from "./components/body/OrderSection";
import FestivityOrder from "./components/body/FestivityOrder";
import QuickOrder from "./components/body/QuickOrder";
import RewardPoints from "./components/body/RewardPoints";


function App() {
  const [activeSection, setActiveSection] = useState("hero"); // 'hero' | 'order'

  return (
    <div className="App">
      <Header />

      {activeSection === "hero" && (
        <>
          <section className="hero-section">
            <div className="hero-overlay">
              <h1 className="hero-title">Welcome to Our Habesha E-commerce</h1>
              <p className="hero-subtitle">
                Fast, reliable, and rewarding orders — anytime, anywhere.
              </p>
            </div>
            <PhotoSlider />
          </section>

          <section className="buttons-section">
            <HeroOverlay onCreateOrder={() => setActiveSection("order")} 
              onFestivityOrder={() => setActiveSection("festivity")}
              onQuickOrder={() => setActiveSection("quick")}
              onRewardPoint = {() => setActiveSection("reward")}
              />
          </section>
        </>
      )}

      {activeSection === "order" && (
        <OrderSection onBack={() => setActiveSection("hero")} />
      )}

      {activeSection === "festivity" && (
        <FestivityOrder onBack={() => setActiveSection("hero")} />
      )}

      {activeSection === "quick" && (
        <QuickOrder onBack={() => setActiveSection("hero")} />
      )}
      {activeSection === "reward" && (
        <RewardPoints onBack={() => setActiveSection("hero")} />
      )}
    </div>
  );
}

export default App;
