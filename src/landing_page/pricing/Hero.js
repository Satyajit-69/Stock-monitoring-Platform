function Hero() {
  return (
    <>
      <div className="container mt-5">
        <div className="row  mt-5">
          <h1 style={{ fontWeight: "3rem" }}  className="text-center">Charges</h1>
          <h5 className="text-muted text-center mb-4">List of all charges and taxes</h5>

          <div
            className="mt-5 d-flex text-center "
            style={{ backgroundColor: "white", fontFamily: "Nunito" }}
          >
            <div className="col-4 p-2">
              <img
                src="assets/pricing0.svg"
                alt=""
                style={{ maxHeight: "12rem" }}
              />

              <h2>Free equity delivery</h2>
              <p className="mt-4 text-muted">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>

            <div className="col-4 p-2">
              <img
                src="assets/pricing0.svg"
                alt="pricing.svg"
                style={{ maxHeight: "12rem" }}
              />

              <h2>Intraday and F&Q trades</h2>
              <p className="mt-4 text-muted">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>

            <div className="col-4 p-2">
              <img
                src="assets/intradayTrades.svg"
                alt="intra.svg"
                style={{ maxHeight: "12rem" }}
              />

              <h2>Free direct MF</h2>
              <p className="mt-4 text-muted">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>

          <h2
            className="text-muted text-center"
            style={{ marginTop: "5rem", marginBottom: "10rem" }}
          >
            {" "}
            <a href="./" className="text-decoration-none">
              {" "}
              Calculate your cost upfront{" "}
            </a>{" "}
            using our brokerage calculator{" "}
          </h2>

          <div className="charges" style={{fontFamily : 'Arial' , marginBottom : '10rem'}}>


            <h2>Charges for account opening</h2>

             <div className="col-10 text-center"
             style={{border : '0.7px solid black' , alignContent : 'center' }}>
                 
                <div className="d-flex p-2 border-bottom text-muted" style={{justifyContent : 'space-between'}}>
                    <p>   Type of account    </p>
                     <p> Charges    </p>
                </div>
                
                 <div className="d-flex p-2 border-bottom text-muted" style={{justifyContent : 'space-between'}}>
                    <p>   Online account    </p>
                     <p style={{backgroundColor :  'lightgreen'}} className="p-2"> FREE    </p>
                </div>

                  <div className="d-flex p-2 border-bottom text-muted" style={{justifyContent : 'space-between' ,backgroundColor : 'whitesmoke'}}>
                    <p>   Offline account    </p>
                     <p style={{backgroundColor :  'lightgreen'}} className="p-2"> FREE    </p>
                </div>

              

                  <div className="d-flex p-2 border-bottom text-muted" style={{justifyContent : 'space-between'}}>
                    <p> NRI account (offline only)    </p>
                     <p className="p-2">  ₹ 500   </p>
                </div>

                <div className="d-flex p-2 border-bottom text-muted" style={{justifyContent : 'space-between' , backgroundColor : 'whitesmoke'}}>
                                    <p>  Partnership, LLP, HUF, or Corporate accounts (offline only)  </p>
                                    <p className="p-2">  ₹ 500   </p>
                                </div>

             </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
