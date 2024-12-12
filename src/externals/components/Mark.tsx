"use client";

import React from "react";

function Mark({
  children,
  className,
}: {
  children: number;
  className?: string;
}) {
  return <div className={`mark ${className ?? ""}`}>{children}</div>;
}

export default Mark;
