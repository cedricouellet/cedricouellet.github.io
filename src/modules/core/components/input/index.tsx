import "./index.css";
import React, { useState } from "react";
import { colors } from "../../theme";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?(value?: string): void;
  onInput?(value?: string): void;
}

export default function Input(props: Props) {
  let input: HTMLInputElement | null;

  const initialBorderProps = {
    color: props.style?.borderColor || colors.input,
    width: "1px"
  };

  const [borderProps, setBorderProps] = useState(initialBorderProps);

  return (
    <div
      onClick={() => input?.focus()}
      className="input-wrapper"
      style={{ borderColor: borderProps.color, borderWidth: borderProps.width, ...props.style }}
    >
      {props.label !== undefined ? <label style={{color: colors.textDark}}>{props.label}</label> : <></>}
      <input
        ref={(ref) => (input = ref)}
        onBlur={() => {
          setBorderProps(initialBorderProps);
        }}
        onFocus={() => {
          setBorderProps({
            color: colors.primary,
            width: "2px"
          });
        }}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.onChange?.(e.target.value)}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onInput?.(e.target.value)
        }
      />
    </div>
  );
}
