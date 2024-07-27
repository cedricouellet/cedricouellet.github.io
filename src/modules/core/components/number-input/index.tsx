import React from "react";
import { Input } from "..";

interface INumberInputProps {
  className?: string;
  style?: React.CSSProperties;
  value?: number;
  label?: string;
  suffix?: string;
  placeholder?: string;
  error?: string;
  readOnly?: boolean;
  onChange?(value?: number): void;
  onInput?(value?: number): void;
}

export default function NumberInput(props: INumberInputProps) {
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
      type="number"
      style={props.style}
      readOnly={props.readOnly}
      className={props.className}
      value={props.value?.toString()}
      placeholder={props.placeholder}
      label={props.label}
      suffix={props.suffix}
      error={props.error}
      onChange={onChange}
      onInput={onInput}
    />
  );
}
