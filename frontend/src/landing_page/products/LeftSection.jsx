import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
         <div className="container mt-5 ">
          <div className="row ">
            <div className="col-6" >
              <img src={imageURL} alt=""  />
            </div>
            <div className="col-6 mt-2" >
               <h1>{productName}</h1>
               <p>{productDescription}</p>
               
               <a  href={tryDemo} style={{textDecoration:"none"}} >Try Demo<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                <a className='mx-5' href={learnMore} style={{textDecoration:"none"}}>Learn more<i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
               <br /> <br />
               <a  href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                 <a className='mx-2' href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
               

            </div>
         </div>
         </div>
     );
}

export default LeftSection;