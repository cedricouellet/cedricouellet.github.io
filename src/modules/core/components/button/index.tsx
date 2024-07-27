import React from "react";
import { spaceJoin } from "../../utils";

interface IButtonProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.JSX.Element | string;
  onClick?(): void;
}

export default function Button(props: IButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onClick?.();
      }}
      className={spaceJoin("button", props.className)}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
