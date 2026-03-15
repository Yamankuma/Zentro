import React from 'react';


function Hero() {
    return ( 
        <div className="container p-3 mt-5 border-bottom">
            <div className="row text-center p-3">
                <h1 className='text-muted '>Zerodha Products</h1>
                <h4 className='text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='text-muted mt-3'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings<i class="fa-solid fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;