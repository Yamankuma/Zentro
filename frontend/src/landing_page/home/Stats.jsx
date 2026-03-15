import React from 'react';

function Stats() {
    return (
     <div className="container p-5">
        <div className="row p-5">
            <div className="col-6 p-5">
             <h1 className='fs-2 mb-5'>Trust with confidence</h1>
             <h3 className='fs-4'>Customer-first always</h3>
             <p className='text-muted'>That's why 1.6+ crore costomers trust Zerodha with ~ ₹6 lakh <br />crores of equity investments, making us India’s largest broker; <br /> contributing to 15% of daily retail exchange volumes in India</p>
             <h3 className='fs-4'>No spam or gimmicks</h3>
             <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. <br /> High quality apps that you use at your pace, the way you like. <br /> Our philosophies.</p>
             <h3 className='fs-4'>The Zerodha universe</h3>
             <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ <br /> fintech  startups offer you tailored services specific to your needs.</p>
             <h3 className='fs-4'>Do better with money</h3>
             <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate <br /> transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-6 p-5">
               <img src="media/images/ecosystem.png" alt="" style={{width:"95%"}} />
             <div className='text-center'>
                    <a href="" className='mx-5' style={{textDecoration: "none"}}>Explore are product <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="" style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
        </div>
     </div>
   );
}

export default Stats;