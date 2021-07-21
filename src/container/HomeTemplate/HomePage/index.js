
import React from 'react'
import About from './Components/About'

import Carousel from './Components/Carousel'


const renderCarouser=()=>{
    return <Carousel/>
}
const renderAbout=()=>{
    return <About/>
}
export default function HomePage() {

    
    return (
        <div>
            {renderCarouser()}
            {renderAbout()}
        </div>
    )
}
