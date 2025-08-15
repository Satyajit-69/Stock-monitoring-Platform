import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './landing_page/home/Homepage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import SignUp from './landing_page/signup/Signup';
import ProductsUniverse from './landing_page/products/Universe';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

       <HomePage />
       <br />
       <AboutPage />  
       <br />
       <PricingPage />
        <br />
      
    
        
      <ProductsUniverse />

  
  </React.StrictMode>
);

