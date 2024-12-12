"use client";
import { SignalIcon } from "@heroicons/react/24/solid";
import React, { CSSProperties } from "react";

export default function Loading({ style }: { style?: CSSProperties }) {
  return (
    <div
      className="w-full h-[15rem] flex items-center justify-center text-2xl"
      style={style}
    >
      <SignalIcon style={{ animation: "spin 1s infinite linear" }} />
    </div>
  );
}
