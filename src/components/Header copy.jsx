import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';
import logo from '../assets/img/logo.png';
import Social from './Social';

const LanguageSwitcher = ({ language, setLanguage }) => {
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);

    // Update gtranslate settings and re-initialize the script
    window.gtranslateSettings.default_language = newLanguage;

    // Remove the existing script
    const existingScript = document.querySelector('#gtranslate_script');
    if (existingScript) {
      existingScript.remove();
    }

    // Append new script to the body
    const newScript = document.createElement("script");
    newScript.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js";
    newScript.async = true;
    newScript.defer = true;
    newScript.id = "gtranslate_script";
    document.body.appendChild(newScript);
  };

  return (
    <div className="language-switcher">
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="zh-CN">中文</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
};

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart = (event) => {
    setIsMenu(!isMenu);
  };

  // State to hold the system language
  const [language, setLanguage] = useState('');

  // Use useEffect to get the language when the component mounts
  useEffect(() => {
    const systemLanguage = navigator.language || navigator.userLanguage;
    setLanguage(systemLanguage.includes('zh') ? 'zh-CN' : 'en');
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 0;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);



  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 992;
      setMobile(isMobile);
    };

    // Call handleResize on component mount to set initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // State to hold mobile status
  const [isMobile, setMobile] = useState(true);  
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: language,
      languages: ["en", "zh-CN", "ar"],
      wrapper_selector: ".gtranslate_wrapper",
      switcher_horizontal_position: isMobile ? "top" : "right",
      flag_style: "3d",
    };
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/dwf.js";
    script.async = true;
    script.defer = true;
    script.id = "gtranslate_script";
    document.body.appendChild(script);
  }, [language, isMobile]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const buyPizzaBtn = "Buy Pizza";
  const buyPizzaBtnUrl = "https://raydium.io/swap/?inputMint=sol&outputMint=4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY";

  return (
    <header className={`heading ${scrolled ? 'position-fixed' : ''}`}>
      <Container className='d-flex align-items-center justify-content-between header-wrapper'>
        <nav className={`heading-menu ${isMenu ? 'show-menu' : ''}`}>
          <div className="title d-flex align-items-center justify-content-between d-lg-none">
            <Link className="logo" to="banner" spy={true} smooth={true} offset={-150} duration={600}>
              <img src={logo} alt='logo' />
            </Link>
            <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
              mobile
            </button>
          </div>
          <ul className="main_menu d-lg-flex align-items-center">
            <Link to="banner" className='heading-link text-uppercase' spy={true} smooth={true} offset={-150} duration={600}>HOME</Link>
            <Link to="about" className='heading-link text-uppercase' spy={true} smooth={true} offset={-150} duration={600}>ABOUT</Link>
            <Link to="tokenomics" className='heading-link text-uppercase' spy={true} smooth={true} offset={-150} duration={600}>Pizzerianomics</Link>
            <Link to="roadmap" className='heading-link text-uppercase' spy={true} smooth={true} offset={-150} duration={600}>Pizzeriamap</Link>
          </ul>
          <div className="forResponsive d-lg-none mt-4">
            <Social />
          </div>
        </nav>
        <Link className="logo" to="banner" spy={true} smooth={true} offset={-150} duration={600}>
          <img src={logo} alt='logo' />
        </Link>
        <div className='d-none d-lg-block'>
          <Social />
        </div>
        <div className="heading-actions d-flex align-items-center flex-wrap d-lg-none">
        <div className="gtranslate_wrapper mobile  gtranslate_wrapper_modile"></div>         
          <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.08984 6H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.08984 12H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.08984 18H21.0898" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}