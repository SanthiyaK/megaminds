import React from 'react'
export default function Design() {
  return (
    <div><div id="demo" class="carousel slide" data-bs-ride="carousel">

   
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    </div>
    <div class="carousel-inner">
            <div class="carousel-item active">
            <div class="carousel-caption">
                    <h2>Exclusive Product New Arrival</h2>
                    <h1>Organic Coffee</h1>
                <h3>SPECIAL BLEND</h3>
                <p>BREAKFAST PRODUCTS ON SALE</p>
                <h1>UP TO </h1>
                <h1>50%</h1>
            </div>
             <img src="la.jpg" alt="Los Angeles1" class=" w-100  "/>
           </div>
    
      <div class="carousel-item">
         <div class="carousel-caption">
            <h2>Exclusive Product New Arrival</h2>
            <h1>Fit Low Crab</h1>
            <h3>CANDY BAR</h3>
            <p>BREAKFAST PRODUCTS ON SALE</p>
           <h1>UP TO </h1>
           <h1>50%</h1>
        </div>
        <img src="la.jpg" alt="Los Angeles" class=" w-100 "/>
        </div>  
    </div>
  
  
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div></div>
  )
}
