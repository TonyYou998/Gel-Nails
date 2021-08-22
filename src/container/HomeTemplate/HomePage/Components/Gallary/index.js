import React from 'react'
import Photos from './Photos'

export default function Gallery() {
    return (
        <div className="container gallery__container py-5 my-4" >
            <h2 className="text-center py-4">Gallery</h2>
            <Photos/>
            
        </div>
    )
}
