import React from "react";
import StaffMember from "./StaffMember";

export default function Staff() {
  return (
    <div className="team py-4">
      <div className="container my-3 ">
        <h2 className="text-center">Our Team</h2>
        <div className="staff__wrapper d-flex pb-2">
          <StaffMember image={"./img/staff1.jpg"} />
          <StaffMember image={"./img/staff2.jpg"} />
          <StaffMember image={"./img/staff3.jpg"} />
          

        </div>
        <div className="staff__wrapper d-flex pt-2">
          <StaffMember image={"./img/staff4.jpg"} />
          <StaffMember image={"./img/staff5.jpg"} />
          <StaffMember image={"./img/staff6.jpg"} />
          

        </div>
      </div>
    </div>
  );
}
