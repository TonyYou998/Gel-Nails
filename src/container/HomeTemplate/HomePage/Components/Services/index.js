import React from 'react'

export default function Services() {
    return (
        <div className="service__container pt-5 mt-5 ">
            <div className="container pt-5">
                <h2 className="text-center" style={{fontSize:"40px",fontWeight:"400"}}>Our Services</h2>
                <p className="text-center">We provide the best services with natural procedures and friendly attitude</p>
                <div className="service__content row w-100">
                    <div className="col-lg-3 service__item col-12 ">
                        <img className="service__img " alt="" src="./img/service1.jpg"></img>
                        <div className="service__name">
                            <h3 className="text-center">service 1</h3>
                        </div>
                    </div>
                    <div className="col-lg-3 service__item col-12">
                        <img className="service__img w-md-100" alt="" src="./img/service2.jpg"></img>

                    </div>
                    <div className="col-lg-3 service__item col-12">
                        <img className="service__img w-md-100" alt="" src="./img/service3.jpg"></img>
{/*  */}
                    </div>
                    <div className="col-lg-3 service__item col-12">
                        <img className="service__img w-md-100" alt="" src="./img/service4.jpg"></img>

                    </div>


                </div>
            </div>
        </div>
    )
}
