import React from "react";
import { spaceJoin } from "../../utils";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  children: any;
  onClick?(): void;
}

export default function Button(props: IProps) {
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
