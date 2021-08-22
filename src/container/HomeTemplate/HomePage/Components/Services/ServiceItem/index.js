import React from "react";

export default function ServiceItem(props) {
    const {name,image}=props;
   
  return (
    <div className="col-lg-3 service__item col-12 ">
      <img className="service__img " alt="" src={image}></img>
      <div className="service__name">
        <h3 className="text-center">{name}</h3>
      </div>
    </div>
  );
}
