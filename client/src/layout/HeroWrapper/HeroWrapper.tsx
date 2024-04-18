import { HeroWrapperProps } from "../../propTypes";

const HeroWrapper = ({ height, gap, children } : HeroWrapperProps) => {
  return (
    <div
      className={`my-5 h-[${height}vh] overflow-y-scroll no-scrollbar flex flex-col gap-${gap} items-center`}
    >
      {children}
    </div>
  );
};

export default HeroWrapper;
