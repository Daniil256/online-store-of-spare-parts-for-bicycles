import React, { FC, ReactNode } from "react";
import "./Button.css";

export const Button: FC<{ children: ReactNode; func: () => void }> = ({
  children,
  func,
}) => {
  return (
    <span className="btn" onClick={func}>
      {children}
    </span>
  );
};
