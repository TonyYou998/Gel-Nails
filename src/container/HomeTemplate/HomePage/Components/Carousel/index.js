import React from 'react'
import Banner from '../Banner'
import Slogan from '../Slogan'

export default function Carousel(props) {
    return (
        <section className="carousel__container">
                <video autoPlay muted loop className=" video ">
                    <source src="./video/GelNail.mp4" />
                  
                </video>
                <Banner/>
        </section>
    )
}
