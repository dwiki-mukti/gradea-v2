import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
interface typeDynamicCardTitleProps {
  label: ReactNode;
  isDisablePrev?: boolean;
  onPrev: () => any;
  isDisableNext?: boolean;
  onNext: () => any;
}

export default function DynamicCardTitle({
  label,
  isDisablePrev,
  onPrev,
  isDisableNext,
  onNext,
}: typeDynamicCardTitleProps) {
  return (
    <div className="grid grid-cols-9 items-center">
      <div className="flex justify-start">
        {!isDisablePrev && (
          <div className="btn-rounded" onClick={onPrev}>
            <ChevronLeftIcon />
          </div>
        )}
      </div>
      <div className="col-span-7 text-center">{label}</div>
      <div className="flex justify-end">
        {!isDisableNext && (
          <div className="btn-rounded" onClick={onNext}>
            <ChevronRightIcon />
          </div>
        )}
      </div>
    </div>
  );
}
