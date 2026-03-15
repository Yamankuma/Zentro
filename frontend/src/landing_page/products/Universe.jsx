import React from 'react';


function Universe() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5 mb-5 text-muted">
                <h3>The Zerodha Universe</h3>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row text-center">
            <div className="col-4 p-5">
                 <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"50%"}}/>
                 <p className="text-muted text-small">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
            </div>
            <div className="col-4 p-5">
                 <img src="media/images/sensibullLogo.svg" alt="" style={{width:"90%"}}/>
                <p className="text-muted text-small">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
            </div>
            <div className="col-4 p-5 ">
               <img src="media/images/tijori.svg" alt="" style={{width:"50%"}}/>
            <p className="text-muted text-small">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
            </div>
            </div>
            <div className="row text-center">
            <div className="col-4 p-5">
                 <img src="media/images/streakLogo.png" alt="" style={{width:"50%"}}/>
                 <p className="text-muted text-small">Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
            </div>
            <div className="col-4 p-5">
                 <img src="media/images/smallcaseLogo.png" alt="" style={{width:"50%"}}/>
                <p className="text-muted text-small">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.</p>
            </div>
            <div className="col-4 p-5 ">
               <img src="media/images/dittoLogo.png" alt="" style={{width:"30%"}}/>
            <p className="text-muted text-small">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
            </div>

            </div>
             <button className='p-2 btn btn-primary d-block mx-auto' style={{width:"12%", margin: "0 auto"}}>Sign up for free</button>
        </div>
     );
}

export default Universe;