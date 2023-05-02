import React from "react";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  const bedroom = [1, 2, 3];
  const bath = ["Half", "Full"];

  return (
    <div className="floor">
      <div className="left">
        {bedroom.map((num, idx) => (
          <Bedroom num={num} key={idx} />
        ))}
        {bath.map((size, idx) => (
          <Bath size={size} key={idx} />
        ))}
      </div>
      <div className="right">
        <Kitchen />
        <LivingRoom />
      </div>
    </div>
  );
};

export default FloorPlan;
