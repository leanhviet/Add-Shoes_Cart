import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex items-center justify-between main h-[100vh] max-w-[760px] m-auto z-10 container">
      {children}
    </div>
  );
};

export default Container;
