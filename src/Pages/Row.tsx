import React from "react";
import { assets } from "../Assets/assets";

const Row = ({
  text,
  basic,
  advanced,
}: {
  text: string;
  basic?: boolean;
  advanced?: boolean;
}) => {
  return (
    <div className="bg-white flex justify-between text-secondaryFour py-5 px-14 text-sm">
      <p className="w-1/3">{text}</p>
      {basic ? (
        <div className="w-1/4">
          <img src={assets.Tick} alt="check" className="w-5 h-5 mx-auto" />
        </div>
      ) : (
        <div className="w-1/4">
          <img src={assets.Close} alt="cross" className="w-5 h-5 mx-auto" />
        </div>
      )}
      {advanced ? (
        <div className="w-1/4">
          <img src={assets.Tick} alt="check" className="w-5 h-5 mx-auto" />
        </div>
      ) : (
        <div className="w-1/4">
          <img src={assets.Close} alt="cross" className="w-5 h-5 mx-auto" />
        </div>
      )}
    </div>
  );
};

export default Row;
