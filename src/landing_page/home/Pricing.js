import React from 'react'


function Pricing() {
    return ( 
       
        <>
         <div className="container">
            <div className="row d-flex pricing-home">

             <div className="col-lg-5" style={{ height : '200px'}}>
                <h3 className='mt-2'>Unbeatable pricing</h3>
                <p className='mt-4'> We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="./" className='text-decoration-none'>See pricing &nbsp;<i class="fa-solid fa-arrow-right"></i> </a>

            </div>
            
             <div className="col-lg-7 d-flex pricing-container" >

                <div className="pricing-box " >
                    <img src="assets/pricing0.svg" alt=""/>
                    <p>free account opening</p>
                </div>

                <div className='pricing-box'>
                     <img src="assets/pricing0.svg" alt="pricing.svg"   />
                    <p>Free equity delivery 
                    </p>
                </div>

                <div className="pricing-box">
                    <img src="assets/intradayTrades.svg" alt="intra.svg" />
                    <p>Intraday and F&Q</p>
                    
                </div>
                            
            </div>

            </div>
         </div>
        
        </>

     );
}

export default Pricing;