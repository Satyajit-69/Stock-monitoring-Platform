function Hero() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          {/* Page Heading */}
          <h1 className="text-center fw-bold">Charges</h1>
          <h5 className="text-muted text-center mb-4">
            List of all charges and taxes
          </h5>

          {/* Three Feature Cards */}
          <div
            className="mt-5 d-flex text-center"
            style={{ backgroundColor: "white", fontFamily: "Nunito" }}
          >
            <div className="col-4 p-3">
              <img
                src="assets/pricing0.svg"
                alt="pricing"
                style={{ maxHeight: "12rem" }}
              />
              <h2 className="mt-3">Free equity delivery</h2>
              <p className="mt-3 text-muted">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>

            <div className="col-4 p-3">
              <img
                src="assets/pricing0.svg"
                alt="intraday"
                style={{ maxHeight: "12rem" }}
              />
              <h2 className="mt-3">Intraday and F&O trades</h2>
              <p className="mt-3 text-muted">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity. Flat ₹20
                on all option trades.
              </p>
            </div>

            <div className="col-4 p-3">
              <img
                src="assets/intradayTrades.svg"
                alt="mf"
                style={{ maxHeight: "12rem" }}
              />
              <h2 className="mt-3">Free direct MF</h2>
              <p className="mt-3 text-muted">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>

          {/* Brokerage Calculator link */}
          <h2
            className="text-muted text-center"
            style={{ marginTop: "5rem", marginBottom: "8rem" }}
          >
            <a href="./" className="text-decoration-none">
              Calculate your cost upfront
            </a>{" "}
            using our brokerage calculator
          </h2>

          {/* Charges for Account Opening */}
          <div className="charges mb-5" style={{ fontFamily: "Arial" }}>
            <h2 className="mb-3">Charges for account opening</h2>
            <div
              className="col-10 mx-auto text-center rounded shadow-sm"
              style={{ border: "1px solid #ddd" }}
            >
              {/* Table Header */}
              <div
                className="d-flex p-2 border-bottom text-muted fw-semibold"
                style={{ justifyContent: "space-between" }}
              >
                <p className="mb-0">Type of account</p>
                <p className="mb-0">Charges</p>
              </div>

              {/* Rows */}
              <div
                className="d-flex p-2 border-bottom"
                style={{ justifyContent: "space-between" }}
              >
                <p className="mb-0">Online account</p>
                <p
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                  className="px-3 py-1 rounded fw-semibold"
                >
                  FREE
                </p>
              </div>

              <div
                className="d-flex p-2 border-bottom"
                style={{
                  justifyContent: "space-between",
                  backgroundColor: "#fafafa",
                }}
              >
                <p className="mb-0">Offline account</p>
                <p
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                  className="px-3 py-1 rounded fw-semibold"
                >
                  FREE
                </p>
              </div>

              <div
                className="d-flex p-2 border-bottom"
                style={{ justifyContent: "space-between" }}
              >
                <p className="mb-0">NRI account (offline only)</p>
                <p className="mb-0">₹ 500</p>
              </div>

              <div
                className="d-flex p-2"
                style={{
                  justifyContent: "space-between",
                  backgroundColor: "#fafafa",
                }}
              >
                <p className="mb-0">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </p>
                <p className="mb-0">₹ 500</p>
              </div>
            </div>
          </div>

          {/* Demat AMC Section */}
          <div
            className="demat-amc"
            style={{ fontFamily: "Arial", marginBottom: "8rem" }}
          >
            <h2 className="mb-3">Demat AMC (Annual Maintenance Charge)</h2>

            <div
              className="col-10 mx-auto text-center rounded shadow-sm"
              style={{ border: "1px solid #ddd" }}
            >
              {/* Header */}
              <div
                className="d-flex p-2 border-bottom text-muted fw-semibold"
                style={{ justifyContent: "space-between" }}
              >
                <p className="mb-0">Value of holdings</p>
                <p className="mb-0">AMC</p>
              </div>

              {/* Rows */}
              <div
                className="d-flex p-2 border-bottom"
                style={{ justifyContent: "space-between" }}
              >
                <p className="mb-0">Up to ₹4 lakh</p>
                <p
                  style={{ backgroundColor: "#4caf50", color: "white" }}
                  className="px-3 py-1 rounded fw-semibold"
                >
                  FREE*
                </p>
              </div>

              <div
                className="d-flex p-2 border-bottom"
                style={{
                  justifyContent: "space-between",
                  backgroundColor: "#fafafa",
                }}
              >
                <p className="mb-0">₹4 lakh - ₹10 lakh</p>
                <p className="mb-0">₹ 100 per year, charged quarterly*</p>
              </div>

              <div
                className="d-flex p-2"
                style={{ justifyContent: "space-between" }}
              >
                <p className="mb-0">NRI account (offline only)</p>
                <p className="mb-0">₹ 300 per year, charged quarterly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
