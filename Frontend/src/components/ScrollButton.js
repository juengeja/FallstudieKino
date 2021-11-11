
import React, {useState} from 'react';
import {FaRegArrowAltCircleUp} from 'react-icons/fa';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setVisible(true)
    } 
    else if (scrolled <= 400){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
     <FaRegArrowAltCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className="scrollButton" />
  );
}
  
export default ScrollButton;