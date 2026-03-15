import React from 'react';


function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
       <div className="container">
        <div className="row  ">
        <div className="col-6 mt-5 p-5">
            <h1 className='mt-5'>{productName}</h1>
            <p className=''>{productDescription}</p>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col-6 ">
            <img className='mb-5' src={imageURL} alt="" />
        </div>
       </div>
       </div>
     );
}

export default RightSection;