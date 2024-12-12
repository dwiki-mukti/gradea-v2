"use client";

import { useState } from "react";
import { typeInputProps } from "./Input";

export default function InputRadio({
  label,
  noLabel,
  stateHandler,

  className,
  onChange,
  checked,
  style,
  value,
  name,
  id,

  ...props
}: Omit<
  typeInputProps,
  | "validations"
  | "aspectRatio"
  | "options"
  | "path"
  | "onSearch"
  | "noSearch"
  | "noUnset"
  | "type"
>) {
  const [getter, setter] = stateHandler ?? useState<typeStateInput>({});

  return (
    <>
      <div className={`input-radio ${className}`}>
        <input
          {...props}
          id={id ?? name}
          name={name}
          type={"radio"}
          onChange={(e) => {
            if (onChange) onChange(e);
            setter((prev: typeStateInput) => ({
              ...prev,
              values: { ...(prev?.values ?? {}), [name]: e.target.value },
            }));
          }}
          value={value}
          checked={checked ?? getter?.values?.[name] == value}
          style={{ cursor: "pointer", ...style }}
        />
        {!noLabel && (
          <label className="cursor-pointer" htmlFor={id ?? name}>
            {label ?? name}
          </label>
        )}
      </div>
    </>
  );
}
