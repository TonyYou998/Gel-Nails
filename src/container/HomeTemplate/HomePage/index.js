
import React from 'react'
import About from './Components/About'

import Carousel from './Components/Carousel'
import Gallery from './Components/Gallary'
import Services from './Components/Services'
import ServicesMobile from './Components/Services/ServicesMobile'
import Staff from './Components/Staff'


const renderCarouser=()=>{
    return <Carousel/>
}
const renderAbout=()=>{
    return <About/>
}
const renderServices=()=>{
    return <Services/>
}
const renderGallery=()=>{
    return <Gallery/>
}
const renderStaff=()=>{
    return <Staff/>
}
const renderSerVicesMobile=()=>{
    return <ServicesMobile/>
}
export default function HomePage() {

    
    return (
        <div>
            {renderCarouser()}
            {renderAbout()}
            {renderServices()}
            {renderSerVicesMobile()}
            {renderGallery()}
            {renderStaff()}
        </div>
    )
}
