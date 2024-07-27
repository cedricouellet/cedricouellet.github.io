import "./index.css";
import React from "react";
import { condition, spaceJoin } from "../../utils";

interface IInputProps {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  value?: string;
  label?: string;
  suffix?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  error?: string;
  onChange?(value?: string): void;
  onInput?(value?: string): void;
  readOnly?: boolean;
}

export default function Input(props: IInputProps) {
  return (
    <div
      className={spaceJoin("input-container", props.className)}
      style={props.style}
    >
      {condition(props.label !== undefined, () => (
        <label className="input-label" style={props.labelStyle}>
          {props.label}
        </label>
      ))}

      <input
        style={props.inputStyle}
        value={props.value || ""}
        type={props.type || "text"}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          props.onChange?.(e.target.value);
        }}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          e.stopPropagation();
          props.onInput?.(e.target.value);
        }}
      />
      {condition(props.suffix !== undefined, () => (
        <label className="input-suffix">{props.suffix}</label>
      ))}

      {condition(props.error !== undefined, () => (
        <div className="input-error error">{props.error}</div>
      ))}
    </div>
  );
}
