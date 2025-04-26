'use client'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    // Make button visible by default after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);
  
  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = '918507700177';
    const message = 'Hello! I would like to know more about CLATians courses.';
    
    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <>
      {isVisible && (
        <button
          onClick={openWhatsApp}
          className="fixed w-12 h-12 bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat with us
          </span>
          <i className="bi bi-whatsapp text-2xl"></i>
        </button>
      )}
    </>
  );
}