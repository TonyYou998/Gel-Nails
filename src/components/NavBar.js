import React from 'react'
import $ from 'jquery';
    

$(document).ready(()=>{
    if($(window).width()>1000){
    
        $(".NavbarShow").addClass("show");
      
        $(".brand").removeClass("w-100");
        $(".Logo").removeClass("text-center");
    }
    else{
        // $(".NavbarShow").removeClass("show");
        $(".navbar").addClass("w-100");
        $(".Logo").addClass("text-center");
    }
})


$(window).scroll(()=>{
    if($(window).scrollTop()>100){
        $(".navbar").addClass("navbar__change");
    }
    else{
        $(".navbar__change").removeClass("navbar__change");
    }
})
    
export default function NavBar() {
 
   
   
    
    return (
        
        <header>
            
            <nav className="py-4 navbar  navbar-expand-lg navbar-light w-100  ">
              
               
              <div className="navbar-collapse ">
                  <div className="px-5 brand">
                      <h2 className="Logo" style={{fontSize:"36px"}} >GEL NAILS</h2>
                  </div>
                  <div className=" w-50 py-1 collapse NavbarShow  ">
                      <ul className="navbar-nav   d-flex justify-content-center " >
                          <li className="nav-item vertical active ">
                          Home
                          </li>
                          
                          <li className="nav-item  vertical">
                          Story
                          </li>
                          <li className="nav-item vertical ">
                          Services
                          </li>
                          <li className="nav-item " style={{padding:"0 20px"}}>
                              Gallery
                          </li>
                      </ul>
                  </div>
                     
                  </div>
             </nav>
        </header>
       
        
    )
}
