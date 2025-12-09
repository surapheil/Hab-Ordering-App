import { useEffect } from 'react';

function useHeaderScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.topHeader');
      if (!header) return;
      if (window.scrollY > 50) {
        header.style.background =
          'linear-gradient(to bottom, rgba(5,5,5,0.98), rgba(15,15,15,0.95)), radial-gradient(circle at top left, rgba(255,215,0,0.08), transparent 70%)';
        header.style.boxShadow = '0 3px 30px rgba(0,0,0,0.85)';
      } else {
        header.style.background =
          'linear-gradient(to bottom, rgba(10,10,10,0.98), rgba(25,18,5,0.95)), radial-gradient(circle at top left, rgba(255,215,0,0.05), transparent 70%)';
        header.style.boxShadow = '0 3px 25px rgba(0,0,0,0.7)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default useHeaderScroll;
