import React from "react";
import Logo from "../../assets/images/flytechBlack.png";

const DHeader = () => {
  return (
    <div className="shrink-0 bg-white w-full flex items-center">
      <div className="w-[240px] shrink-0 flex justify-center items-center py-5">
        <img src={Logo} alt="Flytech IT Logo" className="w-[120px]" />
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default DHeader;
