import React from "react";

type HeroWrapperType = {
  height : number,
  gap : number,
  children : React.ReactNode
}

const HeroWrapper = ({ height, gap, children } : HeroWrapperType) => {
  return (
    <div
      className={`my-5 h-[${height}vh] overflow-y-scroll no-scrollbar flex flex-col gap-${gap} items-center`}
    >
      {children}
    </div>
  );
};

export default HeroWrapper;
