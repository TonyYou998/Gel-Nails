import React from "react";

export default function StaffMember(props) {
    const{image}=props;
  return (
    <div className="profile__card col-4 px-3">
      <div className="d-flex">
        <img src={image}></img>
        <div className="staff__info ml-2 px-3">
          <h2 className="name pt-5 pb-3 " style={{maxWidth:"170px",fontSize:"30px"}}>Violet Frankel</h2>
          <p className="w-100"  className="position">Account manager</p>
          <p className="w-100 quote">"hello my name and lalalal dasda ok con de"</p>
        </div>
      </div>
    </div>
  );
}
