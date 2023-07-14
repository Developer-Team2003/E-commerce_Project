import React from "react";
import LeftTopSec from "./LeftTopSec";
import RightTopSec from "./RightTopSec";

const ContentTopSec = () => {
  return (
    <div className="flex justify-around align-middle">
      <LeftTopSec />
      <RightTopSec />
    </div>
  );
};

export default ContentTopSec;
