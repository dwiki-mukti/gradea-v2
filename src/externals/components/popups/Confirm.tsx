"use client";

import { LightBulbIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

type typeConfirmProps = {
  question?: ReactNode;
  onApproved?: () => any;
  approvedLabel?: string;
  deniedLabel?: string;
  show: boolean;
  toHide: () => void;
  isLoading?: boolean;
  className?: string;
};

export default function Confirm({
  question,
  onApproved,
  approvedLabel,
  deniedLabel,
  show,
  toHide,
  isLoading,
  className,
}: typeConfirmProps) {
  return (
    <div
      className={`modal md:pb-[16rem] ${!show ? "hidden" : ""} ${className}`}
      onClick={(e) => {
        if (e.target == e.currentTarget) toHide();
      }}
    >
      <div className="max-w-md w-full m-auto px-4">
        <div className="card border relative overflow-hidden text-center">
          <div className="pt-10 pb-8">
            {question ?? "Anda benar ingin melakukan hal ini?"}
          </div>
          <div className="grid grid-cols-2 border-t divide-x">
            <div
              className="py-3 cursor-pointer hover:bg-slate-50"
              onClick={onApproved}
            >
              {approvedLabel ?? "Ya"}
            </div>
            <div
              className="py-3 cursor-pointer hover:bg-slate-50"
              onClick={() => toHide()}
            >
              {deniedLabel ?? "Batal"}
            </div>
          </div>
          {Boolean(isLoading) && (
            <div className="absolute inset-0 flex bg-white">
              <div className="m-auto flex items-center gap-1">
                <LightBulbIcon className="animate-spin" />
                <span>Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
