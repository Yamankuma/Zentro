import React from 'react';


function Awards() {
    return( 
         <div className="container mt-5 ">
            <div className="row">
                <div className="col-6">
                <img src="media/images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ milion Zerodha clients contribute to over 15% of all retail orde
volumes in India daily by trading and investing in:</p>
                <div className="row mt-5">
                    <div className="col-6">
                   <ul>
                    <li><p>Futures and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Curency derivatives</p></li>
                    
                   </ul>
                   </div>
                   <div className="col-6">
                      <ul>
                        <li><p>stocks & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li>
                            <p>Bonds and Govt. Securities </p></li>
                      </ul>
                   </div>
                   </div>
                   <img className='mt-5' src="media/images/pressLogos.png" alt="" style={{width:"80%"}}/>
                   
                </div>
            </div>
         </div>
    );
}

export default Awards;