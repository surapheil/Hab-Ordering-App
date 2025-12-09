import logo from'../../assets/21+Logo - Habesha - Vertical.png' 
import notification from '../../assets/ChatGPT Image Oct 23, 2025, 11_25_37 PM.png'
import cart from '../../assets/ChatGPT Image Oct 23, 2025, 11_42_35 PM.png'
import '../styles/top.css';
import useHeaderScroll from './HeaderScroll';
function Header(){
    return(
        <>
        <useHeaderScroll/>
        <div className='topHeader'>
            <div className='habeshaLogo'>
                <img src={logo} alt="habesha logo" className='habeshaImg'/>
            </div>
            <div className='topright'>
                <div className='notification topRightIcn icon'>
                    <img src={notification} alt="notification-icon" />
                </div>
                <div className='cartIcon topRightIcn icon'>
                    <img src={cart} alt="cart-icon" />
                </div>
            </div>
        </div>
        </>
        


    );
};

export default Header;