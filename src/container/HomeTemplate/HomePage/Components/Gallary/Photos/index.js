import React from 'react'

export default function Photos() {
    return (
        <div className=" gallery__items">
            <div className="row gallery__top">
                <div className="col-3 gallery__item w-100">
                    <img  className="w-100" src="./img/service1.jpg" alt=""></img>
                    <div className="gallery__overlay">
                        <h3>Our Gallery</h3>
                        <p>this is our masterpiece</p>
                    </div>
                </div>
                <div className="col-3 gallery__item w-100">
                    <img  className="w-100" src="./img/service2.jpg" alt=""></img>
                </div>
                <div className="col-3 gallery__item w-100">
                    <img  className="w-100" src="./img/service3.jpg" alt=""></img>
                </div>
                <div className="col-3 gallery__item w-100">
                    <img  className="w-100" src="./img/service4.jpg" alt=""></img>
                </div>
            </div>
           
            <div className="row gallery__bottom ">
                <div className="col-4 gallery__item w-100">
                    <img  className="w-100" src="./img/gallery1.jpg" alt=""></img>
                </div>
                <div className="col-4 gallery__item w-100">
                    <img  className="w-100" src="./img/gallery2.jpg" alt=""></img>
                </div>
                <div className="col-4 gallery__item w-100">
                    <img  className="w-100" src="./img/gallery3.jpg" alt=""></img>
                </div>
            </div>
            

            
        </div>
    )
}
