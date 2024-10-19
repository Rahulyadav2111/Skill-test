import React from "react";

const ProgressBar = ({ color, percentage }) => {
  return (
    <div className="w-2/3 bg-gray-200 rounded-full h-2">
      <div
        className="h-2 rounded-full"
        style={{ backgroundColor: color, width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
