import "./index.css";
import React from "react";
import { Input } from "../";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  value?: number;
  label?: string;
  placeholder?: string;
  onChange?(value?: number): void;
  onInput?(value?: number): void;
}

export default function NumberInput(props: Props) {
  function onChange(e: string) {
    let parsed: number | undefined = parseFloat(e);

    if (isNaN(parsed)) {
      parsed = undefined;
    }

    props.onChange?.(parsed);
  }

  return (
    <Input
      style={props.style}
      className={props.className}
      value={props.value?.toString()}
      placeholder={props.placeholder}
      label={props.label}
      type="number"
      onChange={onChange}
      onInput={onChange}
    />
  );
}
