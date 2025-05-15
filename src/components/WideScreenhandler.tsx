import React from "react";

interface WideScreenhandlerProps {
  children: React.ReactNode;
}
const WideScreenhandler: React.FC<WideScreenhandlerProps> = ({ children }) => {
  return <div className="max-w-[1600px] mx-auto">{children}</div>;
};
export default WideScreenhandler;
