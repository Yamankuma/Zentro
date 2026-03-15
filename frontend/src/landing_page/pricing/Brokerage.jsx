import React from 'react';


function Brokerage() {
    return ( 
        <div className="container border-top mt-5">
            <div className="row mt-5 text-muted">
                <div className="col-8">
                      <a href="" style={{textDecoration:"none"}}><h3 className='text-center'>Brokerage calculator</h3></a><br />
                      <ul>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li><br />
                        <li>Digital contract notes will be sent via e-mail.</li><br />
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li><br />
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li><br />
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li><br />
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                       </ul>
                </div>
                <div className="col-4 text-center">
                   <a href="" style={{textDecoration:"none"}}> <h3>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;