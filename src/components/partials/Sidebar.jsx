import React from "react";
import Logo from "../../assets/images/flytechBlack.png";

const Sidebar = () => {
  return (
    <div className="w-[240px] shrink-0 h-full bg-secondary rounded-2xl">
      <div className="flex justify-center p-5">
        <img src={Logo} alt="Flytech IT Logo" className="w-[120px]" />
      </div>
    </div>
  );
};

export default Sidebar;
