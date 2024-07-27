import React from "react";
import { spaceJoin } from "../../utils";

interface IListProps<T> {
  className?: string;
  style?: React.CSSProperties;
  items: T[];
  children: (item: T, index: number) => React.JSX.Element;
}

export default function List<T>(props: IListProps<T>) {
  return (
    <div className={spaceJoin("list", props.className)} style={props.style}>
      {props.items.map(props.children)}
    </div>
  );
}
