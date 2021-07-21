import React from 'react'
import BookButton from '../../../../../Styled-Components/BookButton'
import Slogan from '../Slogan'

export default function Banner() {
    return (
        <div className="banner__wrapper ">
            <div className="banner__title">
                <Slogan/>
               
            </div>
                 <BookButton className="mt-4 btn__book ">
                    Book a Pointment
                </BookButton>
        </div>
    )
}
