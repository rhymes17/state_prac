import React from "react";

const HeroWrapper = ({ height, gap, children }) => {
  return (
    <div
      className={`my-5 h-[${height}vh] overflow-y-scroll no-scrollbar flex flex-col gap-${gap} items-center`}
    >
      {children}
    </div>
  );
};

export default HeroWrapper;
