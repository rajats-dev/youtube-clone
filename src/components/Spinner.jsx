import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center w-full items-center">
      <div className="w-7 h-7 border-4 border-red-500 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
