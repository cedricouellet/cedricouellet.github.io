import React from "react";
import { Input } from "..";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  value?: number;
  label?: string;
  placeholder?: string;
  onChange?(value?: number): void;
  onInput?(value?: number): void;
}

export default function NumberInput(props: IProps) {
  function onChange(e: string) {
    props.onChange?.(parseValue(e));
  }

  function onInput(e: string) {
    props.onInput?.(parseValue(e));
  }

  function parseValue(e: string) {
    let parsed: number | undefined =
      e === undefined || e === "" ? undefined : Number(e);
    if (parsed !== undefined && isNaN(parsed)) {
      parsed = undefined;
    }

    return parsed;
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
      onInput={onInput}
    />
  );
}
