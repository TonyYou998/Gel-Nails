import React from 'react'
import $ from 'jquery';
    
       
    
export default function NavBar() {

    $(window).resize(()=>{
        if($(window).width()>1000){
            $(".NavbarShow").addClass("show");
            $(".brand").removeClass("w-100");
            $(".Logo").removeClass("text-center");
        }
        else{
            $(".show").removeClass("show");
            $(".brand").addClass("w-100");
            $(".Logo").addClass("text-center");
        }
    });
  
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light  ">
              
               
              <div className="navbar-collapse ">
                  <div className="px-5 brand">
                      <h2 className="Logo" style={{fontSize:"36px"}} >GEL NAILS</h2>
                  </div>
                  <div className="px-5 w-50 py-1 collapse NavbarShow show ">
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
