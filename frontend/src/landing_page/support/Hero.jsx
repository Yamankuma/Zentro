import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="p-5 mt-5 mb-5" id='supportWrapper'>
                <h3>Suport Portal</h3>
                <a href="">Track Tickets</a>
            </div>
             <div className="row  p-3 my-5" >
                <div className="col-6 p-3" >
                <h2>Search for an answer or browse help topics to create a ticket</h2>
                 <br />
                 <input type="text" placeholder='Eg. how do i activate F&O, why is my order getting rejected' />
                 <br /><br />
                 <a href="" className='mx-2'>Track Tickets</a>
                 <a href="" className='mx-2'>Track account opening</a>
                 <a href="" className='mx-2'>Track segment activation</a>
                 <a href="" className='mx-2'>Intraday margins</a>
                 <a href=""className='mx-2'>Kite user manual</a>
               </div>
               <div className="col-6 p-3 " >
                <h1>Featured</h1>
                <ol>
                    <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                    <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                </ol>
               </div>
            </div>
        </section>
     );
}

export default Hero;