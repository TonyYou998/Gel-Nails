
import React from 'react'
import About from './Components/About'

import Carousel from './Components/Carousel'
import Services from './Components/Services'


const renderCarouser=()=>{
    return <Carousel/>
}
const renderAbout=()=>{
    return <About/>
}
const renderServices=()=>{
    return <Services/>
}
export default function HomePage() {

    
    return (
        <div>
            {renderCarouser()}
            {renderAbout()}
            {renderServices()}
        </div>
    )
}
