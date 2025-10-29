import React from 'react'
import orderImg from '../../../public/OverlayImages/shopping-cart_6054069.png';
import festiveImage from '../../../public/OverlayImages/celebration_9765976.png';
import QuickOrderImg from '../../../public/OverlayImages/shopping-online(1).png';
import rewardImg from '../../../public/OverlayImages/reward.png';
import '../styles/Overlay.css';

const HeroOverlay = () => {
  return (
   <div className='overlay'>
    <div className='topOverlay'>
        <div className='orderingBtn'>
            <img src={orderImg} alt="cartImage" />
            <p>Create Order</p>
        </div>
        <div>
            <img src={festiveImage} alt="festiveImg" />
            <p>Festivity order</p>
        </div>
    </div>
    <div className='bottomOverlay'>
        <div>
            <img src={QuickOrderImg} alt="quick order icon" />
            <p>Quick Order</p>
        </div>
        <div>
            <img src={rewardImg} alt="reward icon" />
            <p>Reward Points</p>
        </div>
    </div>

</div>
  )
}

export default HeroOverlay;