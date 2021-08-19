import React from 'react'
import BookButton from '../../../../../Styled-Components/BookButton'

export default function About() {
    return (
        <div className="about__container row py-5" style={{paddingTop:"20px",margin:"0"}}>
          
                <img className="col-6 about__img" alt="" src="./img/story.jpg"></img>
                <div className="col-6">
                    <h1 className="pt-4" style={{fontWeight:"300",color:"black",fontSize:"50px"}}>About</h1>
                    <p style={{fontSize:"16px",fontStyle:"italic"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                    <BookButton className="read__more">
                        Read More
                    </BookButton>
                </div>
        </div>
    )
}
