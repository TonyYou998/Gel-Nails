
import React from 'react'
import NavBar from '../../../components/NavBar'
import Carousel from './Components/Carousel'


const renderCarouser=()=>{
    return <Carousel/>
}
export default function HomePage() {

    
    return (
        <div>
            {renderCarouser()}
        </div>
    )
}
