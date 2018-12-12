import React from "react";
import Pie from "./pie.js";

const MissionLegend = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="my-3"
    >
      <div>
        <p>
          <span className="px-3 mr-2 bg-success" />= Success
        </p>
        <p>
          <span className="px-3 mr-2 bg-danger" />= Fail
        </p>
        <p>
          <span className="px-3 mr-2 bg-warning" />= Not Yet Launched
        </p>
      </div>
      <Pie />
    </div>
  );
};

export default MissionLegend;
