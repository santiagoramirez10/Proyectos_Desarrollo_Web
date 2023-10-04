import React from "react";

const PartnerItem = ({ img }) => {
  return (
    <div class="itemP">
      <div class="clients-logo">
        <img src={img} alt="" className="logo-image" />
      </div>
    </div>
  );
};

export default PartnerItem;
