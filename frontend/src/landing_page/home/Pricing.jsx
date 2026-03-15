// import React from 'react';

// function Pricing() {
//     return ( 
//     <div className="container">
//         <div className="row">
//             <div className="col-6">
//               <h1>Unbeatable pricing</h1>
//               <p>We pioneered the concept of discount broking and  price <br /> transparency in India. Flat fees and no hidden charges.</p>
//               <a href="" style={{textDecoration:"none"}}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
//             </div>
//             <div className="col-6">
//               <div className="d-flex align-items-center gap-4">

//     <div className="d-flex align-items-center">
//       <img src="media/images/pricing-eq.svg" alt="" style={{ width: "50%" }} />
//       <p className="mb-0 ms-2">Free account opening</p>
//     </div>

//     <div className="d-flex align-items-center">
//       <img src="media/images/pricing-eq.svg" alt="" style={{ width: "50%" }} />
//       <p className="mb-0 ms-2">Free equity delivery and direct mutual funds</p>
//     </div>

//     <div className="d-flex align-items-center">
//       <img src="media/images/other-trades.svg" alt="" style={{ width: "50%" }} />
//       <p className="mb-0 ms-2 fs-5">Intraday and F&O</p>
//     </div>

//   </div>
// </div>
//     </div>
//     </div>
//     );
// }

// export default Pricing;

import React from "react";

function Pricing() {
  return (
    <div className="container p-5 ">
      <div className="row p-5">

        <div className="col-5 p-3">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price
            <br /> transparency in India. Flat fees and no hidden charges.
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-7 p-3">
          <div className="row">

            <div className="col d-flex align-items-center">
              <img
                src="media/images/pricing-eq.svg"
                alt=""
                style={{ width: "70px" }}
              />
              <p className="ms-3 mb-0  text-small text-muted" >
                Free account <br /> opening
              </p>
            </div>

            <div className="col d-flex align-items-center">
              <img
                src="media/images/pricing-eq.svg"
                alt=""
                style={{ width: "70px" }}
              />
              <p className="ms-3 mb-0 text-small text-muted">
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

            <div className="col d-flex align-items-center ">
              <img 
                src="media/images/other-trades.svg"
                alt=""
                style={{ width: "70px" }}
              />
              <p   className="ms-3 mb-0 text-small text-muted">
                Intraday and F&O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;