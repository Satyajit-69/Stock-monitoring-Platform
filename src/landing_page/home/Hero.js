import React from "react";


function Hero() {
    return ( 
          <div className="container p-5 home-hero">
            <div className="row text-center">
                 
               <img src ="assets/homeHero.png" alt="Hero-Image"/>

                <h1 className="mt-5 fs-2">Invest in everything</h1>
                <p className="fs-6 p-2">Online platforms to Invest in stocks , derivatives , mutual funds , ETFs , bonds , and more</p>

                <button className="btn btn-primary p-2 fs-5" style={{width:"20%" , margin : '0 auto'} }> Sign up free</button>
            </div>
          </div>
     );
}

export default Hero;