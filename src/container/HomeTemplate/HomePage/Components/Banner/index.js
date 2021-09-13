import React from 'react'
import BookButton from '../../../../../Styled-Components/BookButton'
import Slogan from '../Slogan'
import {Link} from "react-router-dom"

export default function Banner() {
    return (
        <div className="banner__wrapper ">
            <div className="banner__title text-center">
                <Slogan/>
               
            </div>
            <div>
                <Link to="/booking" style={{textDecoration:"none"}}>
                    <BookButton className="mt-5 container btn__book ">
                        Book a Pointment
                    </BookButton>      
                </Link>
                

              
                
            </div>
            
        </div>
    )
}
