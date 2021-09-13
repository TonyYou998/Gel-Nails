import React from "react";

export default function ServicesMobile() {
  return (
    <div 
      id="carouselExampleControls"
      className="carousel slide service__mobile "
      
    >
         <h2
          className="text-center"
          style={{ fontSize: "40px", fontWeight: "400" }}
        >
          Our Services
        </h2>
      <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="./img/service1.jpg"></img>
            <div  className="service__title  mt-2 ml-2"><h4 style={{color:"white"}}>service1</h4></div>
            
        </div>
        <div className="carousel-item">
            <img src="./img/service2.jpg"></img>
            <div  className="service__title  mt-2 ml-2"><h4 style={{color:"white"}}>service2</h4></div>
        </div>
        <div className="carousel-item">
            <img src="./img/service3.jpg"></img>
            <div  className="service__title  mt-2 ml-2"><h4 style={{color:"white"}}>service3</h4></div>
        </div>
        <div className="carousel-item">
            <img src="./img/service4.jpg"></img>
            <div  className="service__title  mt-2 ml-2"><h4 style={{color:"white"}}>service4</h4></div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
