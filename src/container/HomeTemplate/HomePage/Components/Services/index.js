import React from 'react'
import ServiceItem from './ServiceItem'

export default function Services() {

    const renderServiceItems=(serviceName,img)=>{
        return <ServiceItem name={serviceName} image={img} />
    }

    return (
        <div className="service__container pt-5 mt-5 ">
            <div className="container pt-5">
                <h2 className="text-center" style={{fontSize:"40px",fontWeight:"400"}}>Our Services</h2>
                <p className="text-center">We provide the best services with natural procedures and friendly attitude</p>
                <div className="service__content row w-100">
                    {renderServiceItems("service1","./img/service1.jpg")}
                    {renderServiceItems("service2","./img/service2.jpg")}
                    {renderServiceItems("service3","./img/service3.jpg")}
                    {renderServiceItems("service4","./img/service4.jpg")}

                </div>
            </div>
        </div>
    )
}
