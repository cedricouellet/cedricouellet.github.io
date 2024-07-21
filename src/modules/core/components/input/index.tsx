import "./index.css";
import React from "react";
import { spaceJoin } from "../../utils";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  value?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?(value?: string): void;
  onInput?(value?: string): void;
}

export default function Input(props: Props) {
  return (
    <div
      className={spaceJoin("input-wrapper", props.className)}
      style={props.style}
    >
      {props.label !== undefined ? (
        <label style={props.labelStyle}>{props.label}</label>
      ) : (
        <></>
      )}
      <input
        style={props.inputStyle}
        value={props.value}
        type={props.type || "text"}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange?.(e.target.value);
        }}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onInput?.(e.target.value);
        }}
      />
    </div>
  );
}
